import { ArrowBigDown, Heart } from "lucide-react";
import React from "react";

function ArrowAndHeart() {
  return (
    <div className="w-full p-2 flex items-center justify-between">
      <div className="rounded-full w-[50px] h-[50px] bg-[#2A2E34] border-arrow flex items-center justify-center ">
        <ArrowBigDown size={32} color="#797C7F" />
      </div>

      <div className="rounded-full w-[50px] h-[50px] border-heart flex items-center justify-center">
        <Heart size={32} color="#797C7F" />
      </div>
    </div>
  );
}

export default ArrowAndHeart;
