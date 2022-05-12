import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import addresses from "./addresses";
import auth from "./auth";

const reducer = combineReducers({
  addresses,
  auth,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
