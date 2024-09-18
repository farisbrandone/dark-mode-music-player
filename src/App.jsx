import { useReducer, useState } from "react";
import "./App.css";
import "./index.css";
import Headers from "./components/Headers";
import PartImages from "./components/PartImages";
import MusicTexts from "./components/MusicTexts";
import MusicTimeListen from "./components/MusicTimeListen";
import StartStopMusicPart from "./components/StartStopMusicPart";
import ArrowAndHeart from "./components/ArrowAndHeart";
import { createContext } from "react";
import PullUpReducer from "./PullUpcontext";
import TextSongFullOpen from "./components/TextSongFullOpen";
import HandleVolume from "./components/HandleVolume";
import ListySong from "./components/ListySong";
import Footer from "./components/Footer";
import { songs } from "../songs";

export const PullUpContext = createContext(null);
export const PullUpDispatchContext = createContext(null);

function App() {
  const initialStatus = {
    pullState: true,
    textState: true,
    songsState: songs,
    indexState: 0,
    currentTime: 0,
    duration: 1,
    audioVolume: "0",
  };

  const [globalState, dispatch] = useReducer(PullUpReducer, initialStatus);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PullUpContext.Provider value={globalState}>
      <PullUpDispatchContext.Provider value={dispatch}>
        <div
          className={`w-full sm:max-w-[1024px] rounded-[28px] h-screen flex flex-col items-center gap-8 lg:gap-14 ${
            !globalState.textState && "gap-4 lg:gap-8"
          }`}
        >
          <Headers></Headers>
          {!globalState.textState && globalState.pullState && (
            <HandleVolume></HandleVolume>
          )}
          {globalState.textState && <PartImages></PartImages>}
          {globalState.textState && globalState.pullState && (
            <MusicTexts></MusicTexts>
          )}
          {!globalState.textState && globalState.pullState && (
            <TextSongFullOpen></TextSongFullOpen>
          )}
          {globalState.pullState && <MusicTimeListen></MusicTimeListen>}
          {globalState.pullState ? (
            <div className="w-full">
              {false && <ArrowAndHeart></ArrowAndHeart>}
              <StartStopMusicPart
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              ></StartStopMusicPart>
            </div>
          ) : (
            <div className="w-full sm:min-w-[650px] flex flex-col gap-6">
              <ArrowAndHeart></ArrowAndHeart>
              <ListySong
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              ></ListySong>
            </div>
          )}
          {globalState.pullState && <Footer></Footer>}
        </div>
      </PullUpDispatchContext.Provider>
    </PullUpContext.Provider>
  );
}

export default App;
