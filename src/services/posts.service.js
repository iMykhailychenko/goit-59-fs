import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://goit-fs.netlify.app/api',
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
