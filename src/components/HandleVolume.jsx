import { Volume2 } from "lucide-react";
import React from "react";

function HandleVolume() {
  return (
    <div className="w-full p-2 flex items-center justify-between">
      <div className="w-[22px] h-[20.63px] flex items-center justify-center">
        <Volume2 size={32} color="#797C7F" />
      </div>

      <div className="flex-1 border-volume h-[5px] flex items-center box-border ">
        <div className="w-[30%] bg-#22262B h-[5px]"></div>
      </div>
    </div>
  );
}

export default HandleVolume;
