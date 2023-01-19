import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
// import CounterPage from './pages/ExercisesPage/CounterPage/CounterPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import LongRequestPage from './pages/ExercisesPage/LongRequestPage/LongRequestPage';
// import RerenderPage from './pages/ExercisesPage/RerenderPage/RerenderPage';
// import TimerPage from './pages/ExercisesPage/TimerPage/TimerPage';
// import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import NewPostPage from './pages/NewPostPage/NewPostPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import PostsListPage from './pages/PostsListPage/PostsListPage';
import CommentsPage from './pages/SinglePostPage/CommentsPage/CommentsPage';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

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
const PostsListPage = lazy(() => import('./pages/PostsListPage/PostsListPage'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-59-fs">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/posts" element={<PostsListPage />} />

            <Route path="/posts/:postId" element={<SinglePostPage />}>
              <Route path="comments" element={<CommentsPage />} />
            </Route>

            <Route path="/new-post" element={<Navigate to="/post-new" />} />

            <Route path="/post-new" element={<NewPostPage />} />

            <Route path="/exercises" element={<ExercisesPage />}>
              {/* <Route index element={<Navigate to="timer" />} /> */}
              <Route path="timer" element={<TimerPage />} />
              <Route path="long-request" element={<LongRequestPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="re-render" element={<RerenderPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
