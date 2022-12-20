import { Modal } from '../Modal/Modal';

import { BannerModal } from './BannerModal';

const isModalOpen = false;

export const Banner = () => {
  return (
    <>
      <div className="p-5 mb-5 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold mb-5">Custom jumbotron</h1>
          <p className="col-md-8 fs-4 mb-5" style={{ maxWidth: 800 }}>
            Using a series of utilities, you can create this jumbotron, just like the one in previous versions of
            Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal>
          <BannerModal />
        </Modal>
      )}
    </>
  );
};
