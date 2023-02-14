import { createAsyncThunk } from '@reduxjs/toolkit';

import { publicApi } from '../../http/http';

export const getPostsThunk = createAsyncThunk('posts', async params => {
  const { data } = await publicApi.get('/posts', {
    params,
  });

  return data;
});
