import React, { useState } from "react";
import songs from "../database.json";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";

function ListySong() {
  const [classValue, setClassValue] = useState("");
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();

  const handlePullDown = () => {
    dispatch({
      type: "pull-down",
      pullUp: true,
    });
  };
  const classconst = "buttonToggle";
  const changeClass = () => {
    if (classValue === "") {
      setClassValue(classconst);
      return;
    }

    setClassValue("");
  };
  return (
    <div
      className="ml-0 mr-0 top-[267px]  p-2 flex flex-col items-center gap-2 w-[30%] h-[5px] list-style absolute  overflow-y-scroll"
      onClick={handlePullDown}
    >
      <div className="w-[30%] h-[5px] bg-[#272C32] line mt-10"></div>

      <div className="w-full flex flex-col items-center gap-4">
        {songs.data.map((song, index) => (
          <div
            className={"flex justify-between items-center" + classValue}
            onClick={changeClass}
          >
            <div className="p-2">
              <h1 className="text-[21px] leading-[21px] font-[400] text-center p-0 ">
                {song.title}
              </h1>
              <h4 className="text-[14px] leading-[14px] font-[400] text-center p-0">
                {song.autor}
              </h4>
            </div>
            {classValue === "" ? (
              <div className=" bg-[#1A1C20] play-for-list play-for-list-stop"></div>
            ) : (
              <div className="play-for-list play-for-list-start"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListySong;
