import { useMemo, useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

import { NotFound } from '../../components/NotFound/NotFound';
import { PostsItem } from '../../components/Posts/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader';
import { STATUS } from '../../constants/status.constants';
import { getPosts } from '../../services/posts.service';

const PostsListPage = () => {
  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);
  const [search, setSearch] = useState('');

  const fetchData = async ({ page = 1, query = '' }) => {
    setStatus(STATUS.loading);
    try {
      const data = await getPosts({ page, search: query });
      setPosts(data);
      setStatus(STATUS.success);
    } catch (error) {
      console.log(error);
      setStatus(STATUS.error);
    }
  };

  const searchPosts = useMemo(() => {
    return debounce(query => fetchData({ query }), 500);
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
    searchPosts(event.target.value);
  };

  useEffect(() => {
    fetchData({ page: 1 });
  }, []);

  // useEffect(() => {
  //   const myFunc = async () => {
  //     // try {
  //     // const data = await ....
  //     // }
  //   };

  //   myFunc();
  //   axios.get('...').then(data).catch().finally()
  // }, []);

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
              const page = index + 1;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={page === posts.page}
                  className="btn btn-primary"
                  onClick={() => {
                    if (page !== posts.page) {
                      fetchData({ page, query: search });
                    }
                  }}
                >
                  {page}
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
