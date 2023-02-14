import { useState } from 'react';

import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // TODO ...
  };

  return (
    <>
      <Link to="/" replace>
        to home page
      </Link>

      <form className="w-100" style={{ maxWidth: 400 }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label d-block">
            <p>Email address</p>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">
            <p>Password</p>
            <input
              type="text"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;
