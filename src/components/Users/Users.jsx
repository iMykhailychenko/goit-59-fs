import { UsersList } from './components/UsersList';
import { UsersSearch } from './components/UsersSearch';
import { UsersStats } from './components/UsersStats';

export const Users = () => {
  return (
    <>
      <UsersSearch />
      <UsersStats />
      <UsersList />
    </>
  );
};
