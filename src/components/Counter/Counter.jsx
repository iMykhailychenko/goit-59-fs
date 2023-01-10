import { useState, useEffect, useRef } from 'react';

const lib = domElemnt => {
  // console.log(domElemnt);
};

export const Counter = () => {
  const isInitRef = useRef(true);
  const titleRef = useRef();
  // console.log(titleRef);

  useEffect(() => {
    lib(titleRef.current);
  }, []);

  const [counter, setCounter] = useState(0);
  const [loader, setLoader] = useState(false);

  const handleMinus = () => {
    setCounter(prev => prev - 1);
    setLoader(prev => !prev);
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

  useEffect(() => {
    // console.log('useEffect withou useRef');
  }, []);

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 ref={titleRef} className="text-center">
        Counter
      </h2>
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
