import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type IDebounced = {
  searchQuery: string;
  delay: number;
};

export const useDebounced = ({ searchQuery, delay }: IDebounced) => {
  const [debouncedvalue, setDebouncedvalue] = useState<string>(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedvalue(searchQuery);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);
  return debouncedvalue;
};
