import { Link } from 'react-router-dom';

import image from './pulp-fiction-john-travolta.gif';

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="not found" style={{ width: 300 }} />
      <p className="my-3">Opsss! This page doesn&apos;t exist</p>

      <Link to="" className="btn btn-primary">
        Open home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
