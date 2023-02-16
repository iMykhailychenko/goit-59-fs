import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="timer">
            Timer
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="long-request">
            Long Request
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="counter">
            Counter
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="counter-2">
            Counter Two
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="re-render">
            Re-render
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="users">
            Users list
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<p>Loading inside ExercisesPage...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ExercisesPage;
