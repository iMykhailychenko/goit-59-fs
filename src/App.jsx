import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { UsersList } from './components/Users/UsersList';
import { AuthContextProvider } from './context/AuthContext';

export const App = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Header title="Hello world!" />

        <UsersList />
      </Layout>
    </AuthContextProvider>
  );
};
