import { useState, useEffect } from 'react';

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    console.log('before setCounter', counter); // 0
    setCounter(prev => prev - 1);
    console.log('after setCounter', counter); // 0
  };

  const handlePlus = () => {
    setCounter(prev => prev + 1);
  };

  useEffect(() => {
    console.log('useEffect');
  }, [counter]);

  return (
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
  );
};

export default CounterPage;
