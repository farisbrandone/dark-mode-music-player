import React from "react";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";
import { ChevronUp } from "lucide-react";

function Footer() {
  const dispatch = usePullUpDispatch();
  const globalState = usePullUP();

  const handlePullUp = () => {
    dispatch({
      type: "pull-up",
      pullUp: false,
    });
  };

  return (
    <div
      className="p-0 w-full flex sm:max-w-[1024px] absolute bottom-0 sm:bottom-1 cursor-pointer "
      onClick={handlePullUp}
    >
      <div className="w-full ">
        <div className="w-full p-0 -mb-3">
          <ChevronUp size={40} color="white" className="mr-auto ml-auto" />
        </div>
        <div className="w-full flex ">
          <p className="text-center pl-2 pr-2 text-xs flex items-center sm:text-xl w-full opacity-[0,2832] p-0 pb-2 text-white font-bold footer-me">
            PULL UP THE SONG LIST
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
