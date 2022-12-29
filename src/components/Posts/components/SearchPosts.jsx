import { Component } from 'react';

export class SearchPosts extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSearch(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <form
        action="#"
        className="input-group mb-3"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={value}
          onChange={this.handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    );
  }
}
