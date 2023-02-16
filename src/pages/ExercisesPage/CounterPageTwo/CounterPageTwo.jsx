import { useReducer } from 'react';

import { counterReducer } from './reducer';

const CounterPageTwo = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <div className="mb-5 p-5 text-white bg-dark rounded-3 box">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {state}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            onClick={() => dispatch({ type: 'MINUS' })}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            -
          </button>

          <button
            onClick={() => dispatch({ type: 'PLUS' })}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterPageTwo;
