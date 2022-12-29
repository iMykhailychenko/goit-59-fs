import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { cutString } from '../../../helpers/cut-string';

export const PostsItem = ({ post }) => {
  return (
    <div className="col-12 col-md-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.preview_image}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Views: {post.views}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(post.created_at))}
            </li>
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-danger">
              Delete post
            </button>

            <a href={`/posts/${post.id}`} className="btn btn-primary ms-3">
              Read post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
