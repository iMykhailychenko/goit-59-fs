import { Component } from 'react';

import PropTypes from 'prop-types';
// document.addEventListener('clicl', (event) => {})

export class Counter extends Component {
  static propTypes = {
    defaultValue: PropTypes.number,
  };

  state = {
    amount: this.props.defaultValue || 0,
  };

  handleClickMinus = () => {
    this.setState(prevState => {
      return { amount: prevState.amount - 1 };
    });
  };

  handleClickPlus = () => {
    // console.log(this.props);

    this.setState(prevState => {
      return { amount: prevState.amount + 1 };
    });
  };

  render() {
    const { amount } = this.state;

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {amount}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button onClick={this.handleClickMinus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
            Minus
          </button>

          <button onClick={this.handleClickPlus} className="btn p-3 btn-outline-light w-25 mx-2" type="button">
            Plus
          </button>
        </div>
      </div>
    );
  }
}
