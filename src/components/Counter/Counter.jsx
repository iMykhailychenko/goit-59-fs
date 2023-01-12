import { useState, useEffect, useRef } from 'react';

export const Counter = () => {
  const isInitRef = useRef(true);

  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    setCounter(prev => prev - 1);
  };

  const handlePlus = () => {
    setCounter(prev => prev + 1);
  };

  useEffect(() => {
    if (!isInitRef.current) {
      // ...
      console.log('useEffect with useRef');
      // ...
    } else {
      isInitRef.current = false;
    }
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
