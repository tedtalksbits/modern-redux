import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice.tsx";
import { apiSlice } from "../features/players/players-api-slice.tsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

// using type script inference to dynamically set type
export type appDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
