import { PropTypes } from 'prop-types';

import { useAuth } from '../../context/AuthContext';
import { ConfettiContainer } from '../../helpers/Confetti/Confetti';
import { EasterEgg } from '../../helpers/EasterEgg/EasterEgg';

export const Layout = ({ children }) => {
  const { isAuth, login, logout } = useAuth();

  return (
    <div className="d-flex h-100 w-100">
      <main
        className="tab-content p-5 h-100 w-100"
        style={{ minHeight: '100vh' }}
      >
        <div className="tab-pane fade show active">
          {isAuth ? (
            <button onClick={logout} type="button">
              logout
            </button>
          ) : (
            <button onClick={login} type="button">
              login
            </button>
          )}
          {children}
        </div>
      </main>

      <ConfettiContainer />
      <EasterEgg />
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
