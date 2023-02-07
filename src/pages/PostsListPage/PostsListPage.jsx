import { useMemo, useEffect, useState } from 'react';

import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { NotFound } from '../../components/NotFound/NotFound';
import { PostsItem } from '../../components/Posts/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader';
import { STATUS } from '../../constants/status.constants';
import { getPostsThunk } from '../../redux/posts/posts.thunk';

const PostsListPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.posts.status);
  const posts = useSelector(state => state.posts.posts);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const searchQuery = searchParams.get('search') ?? '';

  const [search, setSearch] = useState(searchQuery);

  const searchPosts = useMemo(() => {
    return debounce(search => {
      setSearchParams({ page: 1, search }); // localhost.../?page=1&search=javascript
    }, 500);
  }, [setSearchParams]);

  const handleSearch = event => {
    setSearch(event.target.value);
    searchPosts(event.target.value);
  };

  useEffect(() => {
    dispatch(getPostsThunk({ page, search: searchQuery, limit: 1 }));
  }, [dispatch, page, searchQuery]);

  return (
    <>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Type to search..."
        value={search}
        onChange={handleSearch}
      />

      {(status === STATUS.loading || status === STATUS.idle) && <PostsLoader />}

      {status === STATUS.error && <NotFound />}

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts?.data.map(post => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      {posts?.total_pages && (
        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(posts.total_pages)].map((_, index) => {
              const innerPage = index + 1;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={innerPage === posts.page}
                  className="btn btn-primary"
                  onClick={() => {
                    // setSearchParams({ page: 2, data: 'data', test: 'test' }); // '?page=2&data=data&test=test'
                    setSearchParams({ page: innerPage, search: searchQuery });
                  }}
                >
                  {innerPage}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PostsListPage;
