import { Component } from 'react';

import { NotFound } from '../NotFound/NotFound';

import { PostsItem } from './components/PostsItem';
import { PostsLoader } from './components/PostsLoader';
import { SearchPosts } from './components/SearchPosts';

export class Posts extends Component {
  render() {
    return (
      <>
        <SearchPosts />

        {false && <NotFound />}

        {false && <PostsLoader />}

        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {[...Array(5)].map((_, i) => (
              <PostsItem key={i} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(5)].map((_, index) => {
              const page = index + 1;

              return (
                <button className="btn btn-primary" key={index} type="button">
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
