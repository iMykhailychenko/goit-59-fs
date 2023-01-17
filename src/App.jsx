import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import CounterPage from './pages/ExercisesPage/CounterPage/CounterPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import LongRequestPage from './pages/ExercisesPage/LongRequestPage/LongRequestPage';
import RerenderPage from './pages/ExercisesPage/RerenderPage/RerenderPage';
import TimerPage from './pages/ExercisesPage/TimerPage/TimerPage';
import HomePage from './pages/HomePage/HomePage';
import NewPostPage from './pages/NewPostPage/NewPostPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PostsListPage from './pages/PostsListPage/PostsListPage';
import CommentsPage from './pages/SinglePostPage/CommentsPage/CommentsPage';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <BrowserRouter basename="goit-59-fs">
      <Layout>
        <Header title="Hello world!" />

        <Routes>
          <Route path="" element={<HomePage />} />

          <Route path="/posts" element={<PostsListPage />} />

          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/new-post" element={<NewPostPage />} />

          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to="timer" />} />

            <Route path="timer" element={<TimerPage />} />
            <Route path="long-request" element={<LongRequestPage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="re-render" element={<RerenderPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
