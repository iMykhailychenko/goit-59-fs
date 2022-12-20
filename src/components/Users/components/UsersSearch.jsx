import { Component } from 'react';

export class UsersSearch extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search username" />
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </div>
    );
  }
}
