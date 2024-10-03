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
  /*  useEffect(() => {
    audioElement.current.volume = globalState.audioVolume;

    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.addEventListener("timeupdate", () => {
      let currentTime, duration;
      if (audioElement) {
        currentTime = audioElement.current.currentTime;
        duration = audioElement.current.duration;
      } else {
        currentTime = 0;
        duration = audioElement.current.duration;
      }
      dispatch({
        type: "current-total-time",
        currentTime: currentTime,
        duration: duration,
      });
    });
  }, [isPlaying, globalState]); */

  return (
    <div className="w-full p-4 flex items-center justify-between -translate-y-8 sm:translate-y-0 ">
      <div className="rounded-full w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] go-left flex items-center justify-center cursor-pointer">
        <SkipBack color="#797C7F" onClick={SkipBackMusik} />
      </div>

      <div className=" rounded-full w-[65px] h-[64px] sm:w-[81px] sm:h-[80px] start-stop-button flex items-center justify-center cursor-pointer ">
        <PlayStopMusicIcon isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
      <div className="rounded-full w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] go-right flex items-center justify-center cursor-pointer">
        <SkipForward color="#797C7F" className="" onClick={SkipForwardMusic} />
      </div>
    </div>
  );
}

export default StartStopMusicPart;
