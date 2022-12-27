import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import { TimerModal } from './TimerModal';

export class Timer extends Component {
  render() {
    const isOpen = true;

    return (
      <div className="d-flex my-5">
        <button
          type="button"
          className="btn btn-primary my-5"
          onClick={this.toggle}
        >
          Open timer
        </button>

        {isOpen && (
          <Modal onModalClose={this.toggle}>
            <TimerModal />
          </Modal>
        )}
      </div>
    );
  }
}
