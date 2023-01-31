import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { NotFound } from '../../../components/NotFound/NotFound';
import { confetti } from '../../../helpers/Confetti/Confetti';
import {
  deleteUserAction,
  usersSearchAction,
} from '../../../redux/users/users.actions';

import { UsersItem } from './UsersItem';

const UsersPage = () => {
  const dispatch = useDispatch();

  const search = useSelector(state => state.users.search);
  const users = useSelector(state => state.users.data);

  const handleSearch = event => {
    dispatch(
      usersSearchAction(
        event.target.value,
      ) /* -> { type: SEARCH, payload: event.target.value } */,
    );
  };

  const handleDelete = id => {
    dispatch(deleteUserAction(id));
    confetti.run();
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
