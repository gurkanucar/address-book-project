import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import addresses from "./addresses";

const reducer = combineReducers({
  addresses,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
