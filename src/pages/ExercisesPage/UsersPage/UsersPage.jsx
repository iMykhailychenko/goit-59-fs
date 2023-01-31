import { useMemo, useState } from 'react';

import usersJson from '../../../assets/users.json';
import { NotFound } from '../../../components/NotFound/NotFound';
import { confetti } from '../../../helpers/Confetti/Confetti';

import { UsersItem } from './UsersItem';

const UsersPage = () => {
  const [search, setSearch] = useState('');
  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const [users, setUsers] = useState(usersJson);
  const handleDelete = id => {
    confetti.run();
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  const totalOpenToWork = useMemo(() => {
    return users.filter(user => user.isOpenToWork).length;
  }, [users]);

  return (
    <>
      <div className="input-group mb-3">
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          className="form-control"
          placeholder="Search user by name..."
        />
      </div>

      <p>Totla users: {users.length}</p>
      <p>Totla Open to Work: {totalOpenToWork}</p>

      <div className="mb-5">
        {filteredUsers.length ? (
          filteredUsers.map(user => (
            <UsersItem key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default UsersPage;
