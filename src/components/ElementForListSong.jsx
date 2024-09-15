import { Pause, Play } from "lucide-react";
import React, { useState } from "react";

function ElementForListSong({ songs, song, disableButton, setDisableButton }) {
  const [classValue, setClassValue] = useState("");
  const classconst = "buttonToggle";
  const changeClass = () => {
    console.log({ disableButton, classValue });
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
          {song.autor}
        </h4>
      </div>
      {classValue === "" ? (
        <div className="rounded-full bg-[#1A1C20] play-for-list play-for-list-stop flex items-center justify-center mr-4">
          <Play color="#797C7F" fill="#797C7F" />
        </div>
      ) : (
        <div className="rounded-full play-for-list play-for-list-start flex items-center justify-center mr-4">
          <Pause color="#FFFFFF" fill="#FFFFFF" />
        </div>
      )}
    </button>
  );
}

export default ElementForListSong;
