export const Navigation = () => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <a href="/" className="btn nav-btn btn-light">
          Home page
        </a>
        <a href="/posts" className="btn nav-btn btn-light">
          Posts list
        </a>
        <a href="/new-post" className="btn nav-btn btn-light">
          Create new post
        </a>
        <a href="/exercises" className="btn nav-btn btn-light">
          React exercises
        </a>
      </div>
    </div>
  );
};
