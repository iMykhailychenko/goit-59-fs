import { authReducer } from './auth/auth.slice';
import { counterReducer } from './counter/counter.reducer';
import { postsReducer } from './posts/posts.slice';
import { profileReducer } from './profile/profile.slice';
import { postsApi } from './rtk-posts/rtk-posts.api';
import { usersReducer } from './users/users.slice';

export const rootReducer = {
  counter: counterReducer,
  users: usersReducer,
  posts: postsReducer,
  auth: authReducer,
  profile: profileReducer,

  [postsApi.reducerPath]: postsApi.reducer,
};
