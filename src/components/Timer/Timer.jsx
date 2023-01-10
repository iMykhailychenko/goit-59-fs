import { useState, useRef } from 'react';

import { formatTime } from '../../helpers/time';

export const Timer = () => {
  const timerId = useRef(null);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 0);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  // formatTime(3000) -> '00:03:000'
  return (
    <>
      <p className="h1 mb-4 text-center">{formatTime(time)}</p>

      <div className="d-flex justify-content-center">
        <button
          type="button"
          onClick={handleStop}
          className="btn btn-danger btn-lg mx-2"
        >
          Stop
        </button>

        <button
          type="button"
          onClick={handleStart}
          className="btn btn-primary btn-lg mx-2"
        >
          Start
        </button>
      </div>
    </>
  );
};
