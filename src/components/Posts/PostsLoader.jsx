import { Skeleton } from '../Skeleton/Skeleton';

export const PostsLoader = ({ amount = 9 }) => {
  return (
    <div className="container-fluid g-0 pb-5 mb-5">
      <div className="row">
        {[...Array(amount)].map((_, index) => (
          <div key={index} className="col-12 col-md-6 col-xxl-4 mb-4">
            <div className="card">
              <Skeleton style={{ height: '250px' }} />

              <div className="card-body">
                <h5 className="card-title mb-4">
                  <Skeleton style={{ height: '12px' }} />
                </h5>

                <div className="card-text">
                  <Skeleton className="my-2" />
                  <Skeleton className="w-50" />
                </div>

                <div className="d-flex mt-3">
                  <div className="btn disabled btn-danger">Delete post</div>
                  <div className="btn btn-primary disabled ms-3">Read post</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
