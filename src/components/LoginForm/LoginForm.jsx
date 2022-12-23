import { Component } from 'react';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="w-25" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <p>Email address</p>
          </label>

          <input
            id="email"
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <p>Password</p>
            <input
              type="text"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
