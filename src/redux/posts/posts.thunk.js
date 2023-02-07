import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostsThunk = createAsyncThunk(
  'posts',
  async (params, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const { data } = await axios.get(
        'https://goit-fs.netlify.app/api/posts',
        {
          params,
        },
      );

      //   if (!data.isAdmin) {
      //     return thunkAPI.fulfillWithValue();
      //   }

      // console.log(thunkAPI.getState());
      // if (data.isAdmin) {
      //   thunkAPI.dispatch({ type: 'USER_ADMIN' });
      // }
      //   throw new Error();
      return data;
    } catch (e) {
      console.log('error');
      // ...
      return thunkAPI.rejectWithValue();
    }
  },
);
