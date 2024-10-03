import React, { useState } from "react";
import { songs } from "../../songs";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";
import { Pause, Play } from "lucide-react";
import ElementForListSong from "./ElementForListSong";

function ListySong({ isPlaying, setIsPlaying }) {
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();
  const [disableButton, setDisableButton] = useState(
    !isPlaying ? "click" : "noclick"
  );

  const handlePullDown = () => {
    dispatch({
      type: "pull-down",
      pullUp: true,
    });
  };
  return (
    <div className="ml-0 mr-0 max-h-[72vh]  p-0 flex flex-col items-center gap-2 w-screen sm:w-full list-style  relative flex-1  ">
      <div
        className="w-[30%] h-[5px] bg-[#272C32] line top-6 absolute ml-auto mr-auto cursor-pointer"
        onClick={handlePullDown}
      ></div>

      <div className="w-full flex flex-col items-center gap-4 mt-8 p-4 mb-8 overflow-y-auto list-style-song">
        {songs.map((song, index) => (
          <ElementForListSong
            songs={songs}
            key={index}
            index={index}
            song={song}
            disableButton={disableButton}
            setDisableButton={setDisableButton}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          ></ElementForListSong>
        ))}
      </div>
    </div>
  );
}

export default ListySong;
