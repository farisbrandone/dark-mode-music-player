import { ArrowBigDown, Heart } from "lucide-react";
import React from "react";

function ArrowAndHeart() {
  return (
    <div className="w-full mt-14 pl-5 pr-5 flex items-center justify-between">
      <div className="rounded-full w-[50px] h-[50px] bg-[#2A2E34] border-arrow flex items-center justify-center ">
        <ArrowBigDown size={32} color="#797C7F" fill="#797C7F" />
      </div>

      <div className="rounded-full w-[50px] h-[50px] border-heart flex items-center justify-center">
        <Heart size={32} color="#ec540e" fill="#ec540e" />
      </div>
    </div>
  );
}

export default ArrowAndHeart;
