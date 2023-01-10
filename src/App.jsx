import { Counter } from './components/Counter/Counter';
import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { AuthContextProvider } from './context/AuthContext';

export const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AuthContextProvider>
      <Layout>
        <Header title="Hello world!" />

        {/* <Timer />
        <Timer /> */}

        <Counter />

        {/* <button onClick={() => setIsModalOpen(true)} type="button">
        Open modal
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          architecto facere dolorem inventore sint voluptas quos in dicta
          distinctio dolorum repellendus velit vero dolore odio, eveniet maxime
          itaque amet labore.
        </Modal>
      )} */}

        {/* <Vouter /> */}
      </Layout>
    </AuthContextProvider>
  );
};
