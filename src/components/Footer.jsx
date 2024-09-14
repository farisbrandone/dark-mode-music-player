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
      className="p-0 w-full sm:max-w-[1024px] absolute bottom-0 sm:bottom-1"
      onClick={handlePullUp}
    >
      <div className="w-full p-0 -mb-3">
        <ChevronUp size={40} color="#666666" className="mr-auto ml-auto" />
      </div>
      <p className="text-center w-full opacity-[0,2832] p-0 ">
        PULL UP THE SONG LIST
      </p>
    </div>
  );
}

export default Footer;
