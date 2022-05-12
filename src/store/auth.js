import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      isLoggedIn: false,
    },
  },
  reducers: {
    login: (state, action) => {
      // state.value = state.value.filter((x) => x.id !== action.payload.id);
      if (action.payload.username === "a" && action.payload.password === "a") {
        state.value.isLoggedIn = true;
        console.log("login successfull", state.value.isLoggedIn);
      }
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
