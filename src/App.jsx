import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Rerender } from './components/Rerender/Rerender';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Rerender />
    </Layout>
  );
};
