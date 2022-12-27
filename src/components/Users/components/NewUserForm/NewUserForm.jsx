import { Component } from 'react';

import { Availability } from './components/Availability';
import { GeneralInfo } from './components/GeneralInfo';
import { Skills } from './components/Skills';

export class NewUserForm extends Component {
  state = {
    name: '',
    email: '',
    bio: '',
    skills: [],
    isOpenToWork: true,
  };

  handleChangeGeneralInfo = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeOpenToWork = () => {
    this.setState(prevState => ({ isOpenToWork: !prevState.isOpenToWork }));
  };

  render() {
    const { name, email, bio, isOpenToWork } = this.state;

    return (
      <form action="#" autoComplete="off" className="w-100">
        <GeneralInfo
          bio={bio}
          name={name}
          email={email}
          onChange={this.handleChangeGeneralInfo}
        />

        <Availability
          isOpenToWork={isOpenToWork}
          onChange={this.handleChangeOpenToWork}
        />

        <Skills />

        <div className="d-flex flex-column mt-5">
          <button type="button" className="btn py-2 btn-light w-100 mb-2">
            Cancel
          </button>
          <button type="submit" className="btn py-2 btn-primary w-100">
            Create user
          </button>
        </div>
      </form>
    );
  }
}
