import { createReducer } from '@reduxjs/toolkit';

import { deleteUserAction, usersSearchAction } from './users.actions';
import { userInitState } from './users.init-state';

export const usersReducer = createReducer(userInitState, builder => {
  builder
    .addCase(usersSearchAction, (state, { payload }) => {
      state.search = payload;
    })
    .addCase(deleteUserAction, (state, { payload }) => {
      state.data = state.data.filter(user => user.id !== payload);
    });
});
