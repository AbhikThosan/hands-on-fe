import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null, // Persist token in localStorage
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token); // Persist token
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token"); // Clear token
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
