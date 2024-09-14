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
      className="p-3 w-full  flex flex-col items-center gap-2 sm:max-w-[1024px]"
      onClick={handlePullUp}
    >
      <div className="">
        <ChevronUp size={50} color="#666666" />
      </div>

      <p className="text-center w-full opacity-[0,2832] p-0 ">
        PULL UP THE SONG LIST
      </p>
    </div>
  );
}

export default Footer;
