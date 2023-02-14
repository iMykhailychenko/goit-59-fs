import { Component } from 'react';

class LongRequestPage extends Component {
  state = {
    isError: false,
    isLoading: false,
    isDone: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true, isError: false });

    // TODO fetch http://70.34.201.18:4444/long
    // if ok      -> this.setState({ isDone: true, isLoading: false });
    // if error   -> this.setState({ isError: true, isLoading: false });
  }

  componentWillUnmount() {
    // TODO
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

export default LongRequestPage;
