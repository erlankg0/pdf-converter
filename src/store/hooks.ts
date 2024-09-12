import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {RootType, AppDispatch} from "./index.ts";

export const useAppSelect: TypedUseSelectorHook<RootType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()