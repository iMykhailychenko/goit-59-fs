import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import { TimerModal } from './TimerModal';

export class Timer extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

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
          <Modal onClose={this.toggle}>
            <TimerModal />
          </Modal>
        )}
      </div>
    );
  }
}
