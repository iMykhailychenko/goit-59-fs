import { Component } from 'react';

import axios from 'axios';

export class LongRequestModal extends Component {
  controller = null;

  state = {
    isError: false,
    isLoading: false,
    isDone: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true, isError: false });

    try {
      this.controller = new AbortController();

      await axios.get('http://70.34.201.18:8080/long', {
        signal: this.controller,
      });
      this.setState({ isDone: true, isLoading: false });
    } catch (err) {
      this.setState({ isError: true, isLoading: false });
    }
  }

  componentWillUnmount() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  render() {
    const { isError, isLoading, isDone } = this.state;

    return (
      <div className="my-4">
        <p>
          {isDone && 'Success - request ended'}
          {isError && 'Error - no data'}
          {isLoading && 'Loading ...'}
        </p>

        <button className=" btn btn-secondary mt-4" type="button">
          Reject
        </button>
      </div>
    );
  }
}
