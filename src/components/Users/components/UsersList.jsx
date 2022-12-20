import usersJson from '../../../assets/users.json';

import { UsersItem } from './UsersItem';

export const UsersList = () => {
  return (
    <div className="mb-5">
      {usersJson.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </div>
  );
};
