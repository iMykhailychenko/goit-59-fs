import { Component } from 'react';

import usersJson from '../../assets/users.json';
import { Modal } from '../Modal/Modal';

import { NewUserForm } from './components/NewUserForm/NewUserForm';
import { UsersList } from './components/UsersList';
import { UsersSearch } from './components/UsersSearch';
import { UsersStats } from './components/UsersStats';

export class Users extends Component {
  state = {
    users: usersJson,
    isModalOpen: false,
  };

  handleDelete = id => {
    this.setState(prevState => {
      // id=1 [1,2,3,4] -> filter [2,3,4]
      const newUsersList = prevState.users.filter(user => user.id !== id);

      return { users: newUsersList };
    });
  };

  handleToggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { users, isModalOpen } = this.state;

    return (
      <>
        {isModalOpen && (
          <Modal onClose={this.handleToggle}>
            <NewUserForm />
          </Modal>
        )}

        <button
          className="btn btn-primary mb-4"
          type="button"
          onClick={this.handleToggle}
        >
          Create new user
        </button>

        <UsersSearch />
        <UsersStats users={users} />
        <UsersList users={users} onDelete={this.handleDelete} />
      </>
    );
  }
}
