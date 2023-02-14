import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostsThunk = createAsyncThunk('posts', async params => {
  const { data } = await axios.get('http://70.34.201.18:4444/posts', {
    params,
  });

  return data;
});
