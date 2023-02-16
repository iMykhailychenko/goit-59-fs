import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { STATUS } from '../../constants/status.constants';
import { selectAuthStatus } from '../../redux/auth/auth.selector';
import { authLoginThunk } from '../../redux/auth/auth.thunk';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);

  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(authLoginThunk(values)).unwrap();
      toast.success('Success');
    } catch {
      toast.error('Error');
    }
  };

  return (
    <>
      {status === STATUS.loading && <p>Loading ...</p>}

      <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Login page</h1>

        <div className="form-floating my-4">
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;
