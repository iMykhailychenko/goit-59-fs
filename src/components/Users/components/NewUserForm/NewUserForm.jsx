import { Component } from 'react';

import { Availability } from './components/Availability';
import { GeneralInfo } from './components/GeneralInfo';
import { Skills } from './components/Skills';

export class NewUserForm extends Component {
  render() {
    return (
      <form action="#" autoComplete="off" className="w-100" onSubmit={this.handleSubmit}>
        <GeneralInfo />

        <Availability />

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
