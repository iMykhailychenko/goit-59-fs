import { PropTypes } from 'prop-types';

import { useAuth } from '../../../context/AuthContext';

export const Header = ({ title }) => {
  const { isAuth } = useAuth();

  return (
    <header className="pb-4">
      {isAuth ? 'User authonticated' : 'User not loged in'}
      <h1>{title}</h1>
    </header>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
};
