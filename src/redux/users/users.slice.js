import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userInitState } from './users.init-state';

const userSlice = createSlice({
  name: 'users',
  initialState: userInitState,
  reducers: {
    usersSearchAction: (state, { payload }) => {
      state.search = payload;
    },

    deleteUserAction: (state, { payload }) => {
      state.data = state.data.filter(user => user.id !== payload);
    },

    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { usersSearchAction, deleteUserAction, toggleModalAction } =
  userSlice.actions;

const persistConfig = {
  key: 'goit',
  storage,
  whitelist: ['data'],
};

export const usersReducer = persistReducer(persistConfig, userSlice.reducer);
