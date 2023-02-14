import { createAsyncThunk } from '@reduxjs/toolkit';

import { publicApi, token } from '../../http/http';

export const authLoginThunk = createAsyncThunk('login', async (values) => {
  const { data } = await publicApi.post('/users/login', values);
  token.set(data);
  return data;
});
