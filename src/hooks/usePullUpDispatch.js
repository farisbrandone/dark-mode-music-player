import { useContext } from "react";
import { PullUpContext, PullUpDispatchContext } from "../App";

export function usePullUP() {
  return useContext(PullUpContext);
}

export function usePullUpDispatch() {
  return useContext(PullUpDispatchContext);
}
