import { Pause, Play } from "lucide-react";
import React from "react";

function PlayStopMusicIcon({ isPlaying, setIsPlaying }) {
  return (
    <div>
      {!isPlaying ? (
        <Play
          fill="#FFFFFF"
          color="#FFFFFF"
          size={1}
          strokeWidth={1}
          className="w-[60px] h-[60px]"
          onClick={() => setIsPlaying((prev) => !prev)}
        />
      ) : (
        <Pause
          fill="#FFFFFF"
          color="#FFFFFF"
          size={1}
          strokeWidth={1}
          className="w-[60px] h-[60px]"
          onClick={() => setIsPlaying((prev) => !prev)}
        />
      )}
    </div>
  );
}

export default PlayStopMusicIcon;
