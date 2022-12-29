import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Posts } from './components/Posts/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <Posts />
    </Layout>
  );
};
