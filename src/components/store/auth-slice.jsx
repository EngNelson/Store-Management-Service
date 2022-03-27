import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn },
  reducers: {
    login(state) {},
    logout() {},
  },
});
