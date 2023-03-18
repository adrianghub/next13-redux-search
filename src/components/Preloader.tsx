"use client";

import { store } from "@/store";
import { setResults } from "@/store/searchSlice";
import type { Pokemon } from "@/types";
import { useRef } from "react";


export const  Preloader = ({ data }: { data: Pokemon[] }) => {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setResults(data));

    loaded.current = true;
  }

  return null;
}