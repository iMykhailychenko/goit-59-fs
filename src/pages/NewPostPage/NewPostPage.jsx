import { useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

import { Loader } from '../../components/Loader/Loader';

const initialState = {
  title: '',
  content: '',
  image: '',
  preview_image: '',
};

const NewPostPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setForm(initialState);

  const handleSubmit = event => {
    event.preventDefault();

    const isEmpty = Object.values(form).some(item => !item);
    if (isEmpty) {
      toast.error('Fill all required fields!');
      return;
    }

    setIsLoading(true);

    axios
      .post('http://70.34.201.18:4444/posts', form)
      .then(() => {
        toast.success('You have successfully created a new post!');
      })
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}

      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post title</p>
            <input
              value={form.title}
              onChange={handleChange}
              type="text"
              name="title"
              className="form-control"
              placeholder="Post title ..."
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post content</p>
            <textarea
              value={form.content}
              onChange={handleChange}
              className="form-control"
              name="content"
              rows="10"
              placeholder="Post content"
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Preview image url (small image)</p>
            <input
              type="text"
              name="preview_image"
              value={form.preview_image}
              onChange={handleChange}
              className="form-control"
              placeholder="https://example.com/samll_image.jpeg"
            />
          </label>

          {form.image && (
            <img
              src={form.preview_image}
              className="img-thumbnail"
              alt=""
              style={{ height: '200px' }}
            />
          )}
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post image url (large image)</p>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="form-control"
              placeholder="https://example.com/large_image.jpeg"
            />
          </label>

          {form.image && (
            <img
              src={form.image}
              className="img-thumbnail"
              alt=""
              style={{ height: '200px' }}
            />
          )}
        </div>

        <div className="d-flex mt-5">
          <button
            type="button"
            className="d-block btn btn-secondary me-4"
            onClick={handleReset}
          >
            Reset form
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPostPage;
