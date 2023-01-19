import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:8080',
});

export const getPosts = async (params = {}) => {
  const { data } = await postsApi.get('/posts', {
    params: {
      limit: 6,
      ...params,
    },
  });

  return data;
};
