"use client";

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { setSearch } from "@/store/searchSlice";

import { PokemonTable } from '@/components/PokemonTable';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(state => state.search.search);
  const results = useAppSelector(state => state.search.results);
  

  return (
    <>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />


      <PokemonTable data={results} />      
    </>
  );
};

export default SearchInput;
