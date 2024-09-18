import React from "react";
import { usePullUP } from "../hooks/usePullUpDispatch";

function PartImages() {
  const globalState = usePullUP();
  return (
    <div
      className={`rounded-full w-full p-4  overflow-hidden flex items-center justify-center  ${
        !globalState.pullState
          ? "origin-center -translate-y-40 transition-transform absolute "
          : ""
      } `}
    >
      <div className="rounded-full w-[267px] h-[267px] shadow-custumShadow1 shadow-custumShadow2 border-image-source overflow-hidden flex items-center justify-center ">
        <img
          src={globalState.songsState[globalState.indexState].img_src}
          alt="Music images"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default PartImages;
