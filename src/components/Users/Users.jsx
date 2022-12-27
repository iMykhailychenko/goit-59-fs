import { Component } from 'react';

import usersJson from '../../assets/users.json';
import { Modal } from '../Modal/Modal';

import { NewUserForm } from './components/NewUserForm/NewUserForm';
import { UsersList } from './components/UsersList';
import { UsersSearch } from './components/UsersSearch';
import { UsersStats } from './components/UsersStats';

export class Users extends Component {
  state = {
    search: '',
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

  handleUpdateSearch = value => {
    this.setState({ search: value });
  };

  handleToggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { users, search, isModalOpen } = this.state;

    // name: 'Leanne Graham' includes 'leann' -> true;
    // name: 'Leanne Graham' includes '' -> true;
    const newUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

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

        <UsersSearch onSubmit={this.handleUpdateSearch} />
        <UsersStats users={newUsers} />
        <UsersList users={newUsers} onDelete={this.handleDelete} />
      </>
    );
  }
}
