import { Play, SkipBack, SkipForward } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";
import PlayStopMusicIcon from "./PlayStopMusicIcon";

function StartStopMusicPart({ isPlaying, setIsPlaying }) {
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();
  const audioElement = useRef(null);
  const songs = globalState.songsState;
  const SkipBackMusik = () => {
    if (globalState.indexState < songs.length && globalState.indexState > 0) {
      dispatch({
        type: "skip-back-index",
        skip: 1,
      });
      return;
    }
    dispatch({
      type: "skip-to-up",
      index: songs.length - 1,
    });
  };

  const SkipForwardMusic = () => {
    if (
      globalState.indexState < songs.length - 1 &&
      globalState.indexState >= 0
    ) {
      dispatch({
        type: "skip-forward-index",
        skip: 1,
      });
      return;
    }
    dispatch({
      type: "skip-to-down",
      index: 0,
    });
  };
  useEffect(() => {
    audioElement.current.volume = globalState.audioVolume;
    console.log({ trueVolume: audioElement.current.volume });
    if (isPlaying) {
      audioElement.current.play();
      console.log(audioElement.current.currentTime);
    } else {
      audioElement.current.pause();
    }
    audioElement.current.addEventListener("timeupdate", () => {
      let currentTime, duration;
      if (audioElement) {
        currentTime = audioElement.current.currentTime;
        duration = audioElement.current.duration;
        console.log("doudou");
      } else {
        currentTime = 0;
        duration = audioElement.current.duration;
        console.log("dada");
      }

      /* const currentMinutes = Math.floor(currentTime / 60);
      const currentSeconds = Math.floor(currentTime % 60);
      const totalMinutes = Math.floor(duration / 60);
      const totalSeconds = Math.floor(duration % 60);*/

      /* currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
      totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
  
      const progress = (currentTime / duration) * 100;
      progressBar.style.width = `${progress}%`;*/
      dispatch({
        type: "current-total-time",
        currentTime: currentTime,
        duration: duration,
      });
    });
  }, [isPlaying, globalState]);

  return (
    <div className="w-full p-4 flex items-center justify-between">
      <div className="rounded-full w-[60px] h-[60px] go-left flex items-center justify-center">
        <SkipBack color="#797C7F" onClick={SkipBackMusik} />
      </div>

      <div className=" rounded-full w-[81px] h-[80px] start-stop-button flex items-center justify-center  ">
        <audio
          src={songs[globalState.indexState].src}
          ref={audioElement}
        ></audio>
        <PlayStopMusicIcon isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
      <div className="rounded-full w-[60px] h-[60px] go-right flex items-center justify-center">
        <SkipForward color="#797C7F" className="" onClick={SkipForwardMusic} />
      </div>
    </div>
  );
}

export default StartStopMusicPart;
