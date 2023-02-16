import { lazy, Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PrivateRoute } from './components/AuthRouts/PrivateRoute';
import { PublicRoute } from './components/AuthRouts/PublicRoute';
import { Layout } from './components/Layout/Layout';
import { selectAuthToken } from './redux/auth/auth.selector';
import { getProfileThunk } from './redux/profile/profile.thunk';

const NewPostPage = lazy(() => import('./pages/NewPostPage/NewPostPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const CommentsPage = lazy(() =>
  import('./pages/SinglePostPage/CommentsPage/CommentsPage'),
);
const SinglePostPage = lazy(() =>
  import('./pages/SinglePostPage/SinglePostPage'),
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const LongRequestPage = lazy(() =>
  import('./pages/ExercisesPage/LongRequestPage/LongRequestPage'),
);
const RerenderPage = lazy(() =>
  import('./pages/ExercisesPage/RerenderPage/RerenderPage'),
);
const TimerPage = lazy(() =>
  import('./pages/ExercisesPage/TimerPage/TimerPage'),
);
const CounterPage = lazy(() =>
  import('./pages/ExercisesPage/CounterPage/CounterPage'),
);
const CounterPageTwo = lazy(() =>
  import('./pages/ExercisesPage/CounterPageTwo/CounterPageTwo'),
);
const UsersPage = lazy(() =>
  import('./pages/ExercisesPage/UsersPage/UsersPage'),
);
const PostsListPage = lazy(() => import('./pages/PostsListPage/PostsListPage'));
const RTKPostsListPage = lazy(() =>
  import('./pages/RTKPostsListPage/RTKPostsListPage'),
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const JoinPage = lazy(() => import('./pages/JoinPage/JoinPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [token, dispatch]);

  return (
    <BrowserRouter basename="goit-59-fs">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="" element={<HomePage />} />

            <Route path="" element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/join" element={<JoinPage />} />
            </Route>

            <Route path="/posts" element={<PostsListPage />} />

            <Route path="" element={<PrivateRoute />}>
              <Route path="/rtk-posts" element={<RTKPostsListPage />} />

              <Route path="/posts/:postId" element={<SinglePostPage />}>
                <Route path="comments" element={<CommentsPage />} />
              </Route>

              <Route path="/new-post" element={<Navigate to="/post-new" />} />
              <Route path="/post-new" element={<NewPostPage />} />

              <Route path="/exercises" element={<ExercisesPage />}>
                <Route index element={<Navigate to="timer" />} />
                <Route path="timer" element={<TimerPage />} />
                <Route path="long-request" element={<LongRequestPage />} />
                <Route path="counter" element={<CounterPage />} />
                <Route path="counter-2" element={<CounterPageTwo />} />
                <Route path="re-render" element={<RerenderPage />} />
                <Route path="users" element={<UsersPage />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
