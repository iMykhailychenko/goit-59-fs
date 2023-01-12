import { PropTypes } from 'prop-types';

import { useAuth } from '../../context/AuthContext';
import { ConfettiContainer } from '../../helpers/Confetti/Confetti';

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
            <button className="btn btn-danger" onClick={logout} type="button">
              log out
            </button>
          ) : (
            <button className="btn btn-primary" onClick={login} type="button">
              log in
            </button>
          )}
          {children}
        </div>
      </main>

      <ConfettiContainer />
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
