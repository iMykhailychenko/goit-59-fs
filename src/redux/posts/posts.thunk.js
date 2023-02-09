import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostsThunk = createAsyncThunk('posts', async params => {
  const { data } = await axios.get('https://goit-fs.netlify.app/api/posts', {
    params: { ...params, limit: 4 },
  });

  return data;
});
