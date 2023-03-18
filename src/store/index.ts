import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";

import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dataApi: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;