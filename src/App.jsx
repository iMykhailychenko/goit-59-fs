// import { Banner } from './components/Banner/Banner';
// import { Counter } from './components/Counter/Counter';
import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
// import { Users } from './components/Users/Users';
import { Vouter } from './components/Vouter/Vouter';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      {/* <Counter /> */}
      {/* <Counter defaultValue={10} /> */}
      <Vouter />
      {/* <Banner /> */}
      {/* <Users /> */}
    </Layout>
  );
};
