import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

export const PullUpContext = createContext(null);
export const PullUpDispatchContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const initialStatus = {
    pullState: "true",
    textState: "true",
  };

  const [globalState, dispatch] = useReducer(PullUpReducer, initialStatus);

  return (
    <PullUpContext.Provider value={globalState}>
      <PullUpDispatchContext.Provider value={dispatch}>
        <div className="w-full sm:max-w-[1024px] rounded-[28px] p-3 flex flex-col gap-8 ">
          <Headers></Headers>
          {!globalState.textState && <HandleVolume></HandleVolume>}
          {globalState.textState && <PartImages></PartImages>}
          {globalState.textState && globalState.pullState && (
            <MusicTexts></MusicTexts>
          )}
          {!globalState.textState && globalState.pullState && (
            <TextSongFullOpen></TextSongFullOpen>
          )}
          <MusicTimeListen></MusicTimeListen>
          {globalState.pullState ? (
            <StartStopMusicPart></StartStopMusicPart>
          ) : (
            <div className="w-full flex flex-col gap-10">
              <ArrowAndHeart></ArrowAndHeart>
              <ListySong></ListySong>
            </div>
          )}
        </div>
        {globalState.pullState && <Footer></Footer>}
      </PullUpDispatchContext.Provider>
    </PullUpContext.Provider>
  );
}

export default App;
