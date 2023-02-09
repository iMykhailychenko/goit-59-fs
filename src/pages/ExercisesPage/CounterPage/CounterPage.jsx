import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { counterAction } from '../../../redux/counter/counter.action';
import { selectCounter } from '../../../redux/counter/counter.selector';

const CounterPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  const handleMinus = () => {
    dispatch(counterAction(-1));
  };

  const handlePlus = () => {
    dispatch(counterAction(1));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {isOpen ? 'Is open' : 'Is close'}
      </button>

      <div className="mb-5 p-5 text-white bg-dark rounded-3 box">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {counter}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            onClick={handleMinus}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            -
          </button>

          <button
            onClick={handlePlus}
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

export default CounterPage;
