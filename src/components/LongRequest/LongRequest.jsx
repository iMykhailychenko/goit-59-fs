import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import { LongRequestModal } from './LongRequestModal';

export class LongRequest extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        {isOpen && (
          <Modal onClose={this.toggle}>
            <LongRequestModal />
          </Modal>
        )}

        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold mb-5">Long request</h1>

            <button
              className="btn btn-primary btn-lg"
              type="button"
              onClick={this.toggle}
            >
              Open modal
            </button>
          </div>
        </div>
      </>
    );
  }
}
