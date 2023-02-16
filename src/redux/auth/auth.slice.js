import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { STATUS } from '../../constants/status.constants';
import { getProfileThunk } from '../profile/profile.thunk';

import { authInitState } from './auth.init-state';
import { authLoginThunk } from './auth.thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  reducers: {
    logoutAction: () => authInitState,
  },
  extraReducers: builder => {
    builder.addCase(authLoginThunk.pending, state => {
      state.status = STATUS.loading;
    }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.data = payload;
    }).addCase(authLoginThunk.rejected, state => {
      state.status = STATUS.error;
    }).addCase(getProfileThunk.rejected, () => authInitState);
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = persistReducer({
  key: 'auth',
  storage,
}, authSlice.reducer);
