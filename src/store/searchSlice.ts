import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { Pokemon } from "@/types";

export interface SearchState {
  search: string;
  results: Pokemon[];
}

const initialState: SearchState = {
  search: "",
  results: [],
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setResults(state, action: PayloadAction<Pokemon[]>) {
      state.results = action.payload;
    }
  }
});

export const { setSearch, setResults } = searchSlice.actions;
export default searchSlice.reducer;