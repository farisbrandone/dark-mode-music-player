import { Volume, Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";

function HandleVolume() {
  const [volume, setVolume] = useState("0");
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();
  const handleVolume = (e) => {
    e.preventDefault();

    setVolume(e.target.value);
    dispatch({
      type: "change-volume",
      volume: volume,
    });
  };

  useEffect(() => {
    setVolume(volume);
  }, []);

  return (
    <div className="w-full p-2 flex items-center justify-between">
      <div className="w-[2rem] h-[1.8rem] flex items-center justify-center">
        <Volume2 size={32} color="#797C7F" />
      </div>
      <input
        type="range"
        id="volume-control"
        min="0"
        max="1"
        step="0.01"
        defaultValue={globalState.audioVolume}
        name="volume"
        className="w-full"
        onChange={handleVolume}
        onInput={handleVolume}
      />

      {/*className="w-full"  onChange={handleVolume}*/}
      {/*<div className="flex-1 border-volume h-[5px] flex items-center box-border ">
        <div className="w-[30%] bg-#22262B h-[5px]"></div>
      </div>*/}
    </div>
  );
}

export default HandleVolume;
