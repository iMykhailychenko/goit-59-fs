// import { Modal } from '../Modal/Modal';

// import { NewUserForm } from './components/NewUserForm/NewUserForm';
import { UsersList } from './components/UsersList';
import { UsersSearch } from './components/UsersSearch';
import { UsersStats } from './components/UsersStats';

export const Users = () => {
  return (
    <>
      {/* <Modal>
        <NewUserForm />
      </Modal> */}

      <UsersSearch />
      <UsersStats />
      <UsersList />
    </>
  );
};
