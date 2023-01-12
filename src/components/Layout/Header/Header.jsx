import { PropTypes } from 'prop-types';

import { useAuth } from '../../../context/AuthContext';

export const Header = ({ title }) => {
  const { isAuth } = useAuth();

  return (
    <header className="pb-4">
      <p className="my-4">
        {isAuth ? 'User is authenticated' : 'Not loged in'}
      </p>
      <h1>{title}</h1>
    </header>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
};
