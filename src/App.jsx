import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
// import CounterPage from './pages/ExercisesPage/CounterPage/CounterPage';
// import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import LongRequestPage from './pages/ExercisesPage/LongRequestPage/LongRequestPage';
// import RerenderPage from './pages/ExercisesPage/RerenderPage/RerenderPage';
// import TimerPage from './pages/ExercisesPage/TimerPage/TimerPage';
import HomePage from './pages/HomePage/HomePage';
// import NewPostPage from './pages/NewPostPage/NewPostPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import PostsListPage from './pages/PostsListPage/PostsListPage';
// import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <HomePage />
      {/* <PostsListPage /> */}
      {/* <SinglePostPage /> */}
      {/* <NotFoundPage /> */}
      {/* <NewPostPage /> */}

      {/* <ExercisesPage /> */}
      {/* <CounterPage /> */}
      {/* <LongRequestPage /> */}
      {/* <RerenderPage /> */}
      {/* <TimerPage /> */}
    </Layout>
  );
};
