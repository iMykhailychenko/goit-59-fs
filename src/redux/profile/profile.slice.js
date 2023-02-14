import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status.constants';

import { profileInitState } from './profile.init-state';
import { getProfileThunk } from './profile.thunk';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitState,
  extraReducers: builder => {
    builder.addCase(getProfileThunk.pending, (state) => {
      state.status = STATUS.loading;
    }).addCase(getProfileThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.data = payload;
    }).addCase(getProfileThunk.rejected, (state) => {
      state.status = STATUS.error;
    });
  },
});

export const profileReducer = profileSlice.reducer;
