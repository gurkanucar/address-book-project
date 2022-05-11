import { createSlice } from "@reduxjs/toolkit";

import { data } from "../data/data";

export const addressesSlice = createSlice({
  name: "addresses",
  initialState: { value: data },
  reducers: {
    addRecord: (state, action) => {
      state.value.push(action.payload);
    },

    deleteRecord: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id);
    },

    updateRecord: (state, action) => {
      state.value.map((x) => {
        if (x.id === action.payload.id) {
          //   Update operation
          //   user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addRecord, deleteRecord, updateRecord } = addressesSlice.actions;
export default addressesSlice.reducer;
