import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status.constants';

import { postsInitState } from './posts.init-state';
import { getPostsThunk } from './posts.thunk';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitState,
  extraReducers: builder => {
    builder
      .addCase(getPostsThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.posts = payload;
      })
      .addCase(getPostsThunk.rejected, state => {
        state.status = STATUS.error;
      });
  },
});

export const postsReducer = postsSlice.reducer;
