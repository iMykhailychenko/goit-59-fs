import { NavLink } from 'react-router-dom';

const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <NavLink to="" className={getActiveClassName}>
          Home page
        </NavLink>

        <NavLink to="posts" className={getActiveClassName}>
          Posts list
        </NavLink>

        <NavLink to="new-post" className={getActiveClassName}>
          Create new post
        </NavLink>

        <NavLink to="exercises" className={getActiveClassName}>
          React exercises
        </NavLink>
      </div>
    </div>
  );
};
