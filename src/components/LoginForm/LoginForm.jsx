import { Component } from 'react';

export class LoginForm extends Component {
  state = {};

  render() {
    return (
      <form className="w-25">
        <div className="mb-3">
          <label className="form-label">
            <p>Email address</p>
            <input type="text" className="form-control" />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            <p>Password</p>
            <input type="text" className="form-control" />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
