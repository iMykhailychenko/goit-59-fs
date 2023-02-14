import { authInitState } from './auth/auth.init-state';
import { counterInitState } from './counter/counter.init-state';
import { postsInitState } from './posts/posts.init-state';
import { profileInitState } from './profile/profile.init-state';
import { userInitState } from './users/users.init-state';

export const initState = {
  counter: counterInitState,
  users: userInitState,
  posts: postsInitState,
  auth: authInitState,
  profile: profileInitState,
};
