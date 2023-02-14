import { useState } from 'react';

import axios from 'axios';
import classNames from 'classnames';
import { toast } from 'react-toastify';

export const CommentForm = ({ setComments }) => {
  // TODO change to dynamic value
  const postId = 10;

  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');

  const handleChange = event => setContent(event.target.value);
  const handleReset = () => setContent('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!content.trim()) {
      toast.error('Fill all required fields!');
      return;
    }

    setIsLoading(true);
    axios
      .post(`http://70.34.201.18:4444/posts/${postId}/comments`, {
        content,
      })
      .then(data => {
        toast.success('You have successfully created a new comment!');
        setComments(prev => ({ ...prev, data: [data, ...prev.data] }));
        handleReset();
      })
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form action="#" className="my-5" onSubmit={handleSubmit}>
      <label className="d-block form-label">
        <p>Post content</p>
        <textarea
          rows="5"
          value={content}
          onChange={handleChange}
          className="form-control"
          placeholder="Write your feedback"
        />
      </label>

      <button
        type="submit"
        className={classNames(
          'btn btn-primary my-2',
          isLoading ? 'disabled' : '',
        )}
      >
        {isLoading && <span className="spinner-grow spinner-grow-sm mr-2" />}
        Submit
      </button>
    </form>
  );
};
