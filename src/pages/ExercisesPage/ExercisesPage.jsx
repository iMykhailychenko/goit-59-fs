const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        <li className="nav-item">
          <a className="nav-link" to="/exercises/timer">
            Timer
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" to="/exercises/long-request">
            Cancel Request
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" to="/exercises/counter">
            Counter
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" to="/exercises/re-render">
            Re-render
          </a>
        </li>
      </ul>
    </>
  );
};

export default ExercisesPage;
