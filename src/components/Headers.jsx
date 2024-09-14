import { ChevronLeft, EllipsisVertical } from "lucide-react";
import React from "react";
import { usePullUP } from "../hooks/usePullUpDispatch";

function Headers() {
  const globalState = usePullUP();
  return (
    <section
      className={`flex items-center justify-between w-full mt-2 p-2  ${
        !globalState.pullState
          ? "origin-center -translate-y-80 transition-transform"
          : ""
      } `}
    >
      <div className="rounded-head">
        <ChevronLeft
          className="w-[32px] h-[64px] p-0 m-0 "
          color="#797C7F"
          strokeWidth="2px"
        />
      </div>
      <div className="font-[400] leading-[24px]">
        <h1 className="w-full p-0 text-[#999999] text-[24px] ">THE MONSTER</h1>
        <h4 className="p-0 w-full text-textColors/[0.4979] text-[14px] leading-[14px]">
          EMINEM/ RIHANNA
        </h4>
      </div>
      <div className="rounded-head">
        <EllipsisVertical color="#797C7F" size={24} />
      </div>
    </section>
  );
}

export default Headers;
