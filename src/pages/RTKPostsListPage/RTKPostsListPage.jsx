import { useMemo, useState } from 'react';

import debounce from 'lodash/debounce';
import { useSearchParams } from 'react-router-dom';

import { NotFound } from '../../components/NotFound/NotFound';
import { PostsItem } from '../../components/Posts/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader';
import { useGetPostsQuery, useDeletePostsMutation } from '../../redux/rtk-posts/rtk-posts.api';

const RTKPostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const searchQuery = searchParams.get('search') ?? '';

  const { data, isLoading, isError, isSuccess } = useGetPostsQuery({
    page,
    search: searchQuery,
  });
  const [trigger] = useDeletePostsMutation();

  const [search, setSearch] = useState(searchQuery);

  const searchPosts = useMemo(() => {
    return debounce(search => {
      setSearchParams({ page: 1, search });
    }, 500);
  }, [setSearchParams]);

  const handleSearch = event => {
    setSearch(event.target.value);
    searchPosts(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Type to search..."
        value={search}
        onChange={handleSearch}
      />

      {isLoading && <PostsLoader />}

      {isError && <NotFound />}

      {isSuccess && (
        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {data?.data.map(post => (
              <PostsItem key={post.id} post={post} onDelete={trigger} />
            ))}
          </div>
        </div>
      )}

      {data?.total_pages && (
        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(data.total_pages)].map((_, index) => {
              const innerPage = index + 1;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={innerPage === data.page}
                  className="btn btn-primary"
                  onClick={() => {
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

export default RTKPostsListPage;
