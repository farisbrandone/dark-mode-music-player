import React, { useState } from "react";
import database from "../database.json";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";

function TextSongFullOpen() {
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();

  const handleOpenText = () => {
    dispatch({
      type: "close-text",
      openText: true,
    });
  };

  const initialStatus = database.data[0]["music-text"].split(".")[0];
  const [textStatus, setTextStatus] = useState(initialStatus);
  return (
    <div
      className="w-full flex-1 p-4 flex flex-col items-center gap-4 overflow-hidden snap-center max-h-[350px] sm:max-h-[450px] cursor-pointer"
      onClick={handleOpenText}
    >
      {database.data[0]["music-text"].split(".").map((text, index) => (
        <p
          key={`${text}-${index}`}
          className={`${
            textStatus === text
              ? "text-[14px] text-[#E34715] sm:text-[18px]"
              : "text-[12px] sm:text-[14px] text-#666666"
          } text-[12px] sm:text-[16px] leading-[16px] font-[500] `}
          onClick={(text) => setTextStatus(text)}
        >
          {text.toUpperCase()}
        </p>
      ))}
    </div>
  );
}

export default TextSongFullOpen;
