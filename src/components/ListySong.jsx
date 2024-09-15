import React, { useState } from "react";
import songs from "../database.json";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";
import { Pause, Play } from "lucide-react";
import ElementForListSong from "./ElementForListSong";

function ListySong() {
  const [disableButton, setDisableButton] = useState("aucun");
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();

  const handlePullDown = () => {
    dispatch({
      type: "pull-down",
      pullUp: true,
    });
  };
  return (
    <div className="ml-0 mr-0 min-h-[72vh] -mb-10 p-0 flex flex-col items-center gap-2 w-screen sm:w-full list-style overflow-y-scroll relative ">
      <div
        className="w-[30%] h-[5px] bg-[#272C32] line top-6 absolute ml-auto mr-auto"
        onClick={handlePullDown}
      ></div>

      <div className="w-full flex flex-col items-center gap-4 mt-8">
        {songs.data.map((song, index) => (
          <ElementForListSong
            songs={songs}
            key={index}
            song={song}
            disableButton={disableButton}
            setDisableButton={setDisableButton}
          ></ElementForListSong>
        ))}
      </div>
    </div>
  );
}

export default ListySong;
