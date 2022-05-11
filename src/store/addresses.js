import { createSlice } from "@reduxjs/toolkit";

import { data } from "../data/data";

export const addressesSlice = createSlice({
  name: "addresses",
  initialState: { value: data },
  reducers: {
    addRecord: (state, action) => {
      let temp = state.value;
      temp.push(action.payload);
      state.value = temp;
    },

    deleteRecord: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id);
    },

    updateRecord: (state, action) => {
      state.value = state.value.map((x) => {
        let temp = x;
        if (x.id === action.payload.id) {
          const updatedData = action.payload.values;
          temp = { ...updatedData };
        }
        return temp;
      });
    },
  },
});

export const { addRecord, deleteRecord, updateRecord } = addressesSlice.actions;
export default addressesSlice.reducer;
