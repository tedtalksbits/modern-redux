import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootState, appDispatch } from "./store.tsx";

// (aliasing) adding type  to basic redux hooks and returning them
export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
