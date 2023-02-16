import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { selectAuthToken } from '../../../../redux/auth/auth.selector';
import { logoutAction } from '../../../../redux/auth/auth.slice';
import { Button } from '../../../Button/Button';

const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = useSelector(selectAuthToken);
  const profile = useSelector(state => state.profile.data);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        {!token && <h2 className="h3 mb-4">Please log in!</h2>}

        {token && profile && (
          <>
            <h2 className="h5 mb-4">Welcome back!</h2>
            <small className="d-block">{profile.first_name} {profile.last_name}</small>
            <small>{profile.email}</small>
            <br />
            <br />
          </>
        )}

        <NavLink to="" className={getActiveClassName}>
          Home page
        </NavLink>
        <NavLink to="posts" end className={getActiveClassName}>
          Posts list
        </NavLink>

        {token ? (
          <>
            <NavLink to="rtk-posts" className={getActiveClassName}>
              RTK Posts list
            </NavLink>

            <NavLink to="new-post" className={getActiveClassName}>
              Create new post
            </NavLink>

            <NavLink to="exercises" className={getActiveClassName}>
              React exercises
            </NavLink>

            <Button className="btn-danger mt-5" onClick={() => dispatch(logoutAction())}>Log Out</Button>
          </>
        ) : (
          <>
            <NavLink to="login" state={{ from: location }} className={getActiveClassName}>
              Login
            </NavLink>

            <NavLink to="join" className={getActiveClassName}>
              Join
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
