import React from "react";
import { usePullUP, usePullUpDispatch } from "../hooks/usePullUpDispatch";

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
    <div className="p-3 w-full " onClick={handlePullUp}>
      <div className="m-auto bg-[#2D2E32] border-[2px] "></div>

      <p className="text-center w-full opacity-[0,2832]">
        PULL UP THE SONG LIST
      </p>
    </div>
  );
}

export default Footer;
