import { useEffect, useState, useMemo } from 'react';

import usersJson from '../../assets/users.json';
import { NotFound } from '../NotFound/NotFound';

import { UsersItem } from './UsersItem';

// 0 || 100 -> 100
// 0 ?? 100 -> 0

// || -> true; false
// ?? -> null; undefined

export const UsersList = () => {
  const [search, setSearch] = useState('');
  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users-list')) ?? usersJson;
  });
  const handleDelete = id => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('users-list', JSON.stringify(users));
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

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

// export class UsersList extends Component {
//   state = {
//     search: '',
//     users: usersJson,
//   };

//   handleDelete = id => {
//     this.setState(prevState => {
//       return { users: prevState.users.filter(user => user.id !== id) };
//     });
//   };

//   handleSearch = event => {
//     this.setState({ search: event.target.value });
//   };

//   render() {
//     const { search, users } = this.state;
//     const filteredUsers = users.filter(user =>
//       user.name.toLowerCase().includes(search.toLowerCase()),
//     );

//     return (
//       <>
//         <div className="input-group mb-3">
//           <input
//             value={search}
//             onChange={this.handleSearch}
//             type="search"
//             className="form-control"
//             placeholder="Search user by name..."
//           />
//         </div>

//         <div className="mb-5">
//           {filteredUsers.length ? (
//             filteredUsers.map(user => (
//               <UsersItem
//                 key={user.id}
//                 user={user}
//                 onDelete={this.handleDelete}
//               />
//             ))
//           ) : (
//             <NotFound />
//           )}
//         </div>
//       </>
//     );
//   }
// }
