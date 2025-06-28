import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "login",
  loading: false,
  error: null,
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = authslice.actions;

export default authslice.reducer;
