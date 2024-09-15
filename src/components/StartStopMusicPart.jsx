import { Play, SkipBack, SkipForward } from "lucide-react";
import React from "react";

function StartStopMusicPart() {
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <div className="rounded-full w-[60px] h-[60px] go-left flex items-center justify-center">
        <SkipBack color="#797C7F" />
      </div>

      <div className=" rounded-full w-[81px] h-[80px] start-stop-button flex items-center justify-center  ">
        <Play
          fill="#FFFFFF"
          color="#FFFFFF"
          size={1}
          strokeWidth={1}
          className="w-[80px] h-[80px]"
        />
      </div>

      <div className="rounded-full w-[60px] h-[60px] go-right flex items-center justify-center">
        <SkipForward color="#797C7F" className="" />
      </div>
    </div>
  );
}

export default StartStopMusicPart;
