import { useEffect, useState } from 'react';

import { useNavigate, Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { confetti } from '../../components/Confetti/Confetti';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ...
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = event => {
    const { value, name } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== '123') {
      toast.error('Невірний пароль');
      return;
    }

    setEmail('');
    setPassword('');

    confetti.run();
    navigate('/posts', { replace: true, state: [1, 2, 3, 4] });
  };

  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate('/');
  //     }
  //   }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
              value={email}
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
              value={password}
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
