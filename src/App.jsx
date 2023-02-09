import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
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
const UsersPage = lazy(() =>
  import('./pages/ExercisesPage/UsersPage/UsersPage'),
);
const PostsListPage = lazy(() => import('./pages/PostsListPage/PostsListPage'));
const RTKPostsListPage = lazy(() =>
  import('./pages/RTKPostsListPage/RTKPostsListPage'),
);

export const App = () => {
  return (
    <BrowserRouter basename="goit-59-fs">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/posts" element={<PostsListPage />} />
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
              <Route path="re-render" element={<RerenderPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
