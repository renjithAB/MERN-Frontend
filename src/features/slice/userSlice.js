import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { logUser } = userSlice.actions;

export default userSlice.reducer;
