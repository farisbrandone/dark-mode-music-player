import { Pause, Play } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";

function ElementForListSong({
  songs,
  index,
  song,
  disableButton,
  setDisableButton,
  isPlaying,
  setIsPlaying,
}) {
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();
  const [classValue, setClassValue] = useState("");
  const audioElement = useRef(null);

  /* const indexState = globalState.indexState;
  let isEqual = isEqual(songs[indexState], song)
  console.log(isEqual);*/
  const classconst = "buttonToggle";
  const changeClass = () => {
    if (
      (classValue === "" && disableButton === "aucun") ||
      (classValue === "" && disableButton === "noclick")
    ) {
      setDisableButton((prev) => {
        if (prev === "aucun") {
          return "click";
        } else if (prev === "click") {
          return "noclick";
        } else {
          return "click";
        }
      });
      setClassValue(classconst);
      return;
    }
    if (classValue !== "" && disableButton === "click") {
      setDisableButton("noclick");
      setClassValue("");
    }
    setClassValue("");
  };

  useEffect(() => {
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
  }, [isPlaying, globalState]);

  return (
    <button
      key={song.title}
      className={"w-full flex justify-between items-center " + classValue}
      onClick={changeClass}
    >
      <div className="flex-1 p-2">
        <h1 className="text-[21px] leading-[21px] font-[400] text-center p-0 ">
          {song.title}
        </h1>
        <h4 className="text-[14px] leading-[14px] font-[400] text-center p-0">
          {song.artist}
        </h4>
      </div>
      <audio src={songs[globalState.indexState].src} ref={audioElement}></audio>
      {classValue === "" ? (
        <div className="rounded-full bg-[#1A1C20] play-for-list play-for-list-stop flex items-center justify-center mr-4">
          <Play
            color="#797C7F"
            fill="#797C7F"
            onClick={() => {
              setIsPlaying((prev) => !prev);
              dispatch({
                type: "skip-to-index",
                index: index,
              });
            }}
          />
        </div>
      ) : (
        <div className="rounded-full play-for-list play-for-list-start flex items-center justify-center mr-4">
          <Pause
            color="#FFFFFF"
            fill="#FFFFFF"
            onClick={() => {
              setIsPlaying((prev) => !prev);
              dispatch({
                type: "skip-to-index",
                index: index,
              });
            }}
          />
        </div>
      )}
    </button>
  );
}

export default ElementForListSong;
