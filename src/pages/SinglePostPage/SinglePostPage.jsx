import { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loader } from '../../components/Loader/Loader';

const SinglePostPage = () => {
  const { postId } = useParams();
  const location = useLocation();
  console.log(location);

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('http://70.34.201.18:4444/posts/' + postId)
      .then(({ data }) => setPost(data))
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    post && (
      <>
        <Link to={location.state?.from ?? '/posts'} className="mb-4">
          Back
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />
        <h1 className="mb-5">{post.title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, '<br/>'),
          }}
        />

        <Link
          to="comments"
          className="btn btn-primary my-4"
          state={{ from: location.state?.from }}
        >
          Vew post comments
        </Link>

        <Outlet />
      </>
    )
  );
};

export default SinglePostPage;
