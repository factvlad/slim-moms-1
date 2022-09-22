import { createSlice } from '@reduxjs/toolkit';
import { userInfoOperation } from './user-operations';

const initialState = {
  userInfo: {},
  isLoading: false,
  isLogin: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userInfoOperation.pending]: state => {
      state.isLoading = true;

      state.error = null;
    },
    [userInfoOperation.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLogin = true;
      state.isLoading = false;
      // return { ...payload, isLogin: true, isLoading: false };
    },
    [userInfoOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;