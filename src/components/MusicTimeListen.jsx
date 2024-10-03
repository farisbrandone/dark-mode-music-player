import React, { useEffect, useState } from "react";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";

function MusicTimeListen() {
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);
  const [classNew, setclassNew] = useState(
    "h-[25px] w-[0%] z-10 block box-content bg-gradient-to-r from-[#FF611A] from-0% to-[#CB340D] to-82.68% transition-all will-change-transform absolute"
  );

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  const currentTimeDisplay = `${currentMinutes}:${
    currentSeconds < 10 ? "0" : ""
  }${currentSeconds}`;
  const totalTimeDisplay = `${totalMinutes}:${
    totalSeconds < 10 ? "0" : ""
  }${totalSeconds}`;
  /*const progress = (currentTime / duration) * 100;*/

  useEffect(() => {
    setCurrentTime(globalState.currentTime);
    setDuration(globalState.duration);

    setclassNew(
      `h-[5px] w-[${
        (currentTime / duration) * 100
      }%] z-10 block box-content bg-gradient-to-r from-[#FF611A] from-0% to-[#CB340D] to-82.68% transition-all will-change-transform absolute`
    );
  }, [currentTime, duration, setCurrentTime, setDuration, globalState]);
  return (
    <div
      className={`w-full p-2 flex items-center gap-2 ${
        !globalState.pullState && "hidden transition-all duration-1000"
      }`}
    >
      <div className="w-[28px] h-[11px] p-0 text-[11px] leading-[11px] ">
        {currentTimeDisplay}
      </div>
      <div className="flex-1 bg-[#111216]  border-lecture p-0 h-[5.5px] box-border flex items-center relative">
        <div
          style={{ width: `${(currentTime / duration) * 100}%` }}
          className={classNew}
        ></div>
      </div>
      <div className="w-[28px] h-[11px] p-0 text-[11px] leading-[11px]">
        {totalTimeDisplay}
      </div>
    </div>
  );
}

export default MusicTimeListen;
