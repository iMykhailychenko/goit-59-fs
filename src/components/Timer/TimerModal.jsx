import { Component } from 'react';

import { formatTime } from '../../helpers/time';

export class TimerModal extends Component {
  state = {
    time: new Date(),
  };

  render() {
    const { time } = this.state;
    return (
      <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
        <h2 className="h1 m-5">{formatTime(time)}</h2>
      </div>
    );
  }
}
