import { Component } from 'react';

import usersJson from '../../assets/users.json';
import { NotFound } from '../NotFound/NotFound';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {
  state = {
    search: '',
    users: usersJson,
  };

  handleDelete = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };

  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, users } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <>
        <div className="input-group mb-3">
          <input
            value={search}
            onChange={this.handleSearch}
            type="search"
            className="form-control"
            placeholder="Search user by name..."
          />
        </div>

        <div className="mb-5">
          {filteredUsers.length ? (
            filteredUsers.map(user => (
              <UsersItem
                key={user.id}
                user={user}
                onDelete={this.handleDelete}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </>
    );
  }
}
