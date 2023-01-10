import { useState } from 'react';

import { formatTime } from '../../helpers/time';

export const Timer = () => {
  const [time, setTime] = useState(0);

  const handleStart = () => {
    setInterval(() => {
      setTime(prev => prev + 1);
    }, 0);
  };

  const handleStop = () => {
    // TODO
  };

  return (
    <>
      <p className="h1 mb-4 text-center">{formatTime(time)}</p>

      <div className="d-flex justify-content-center">
        <button
          type="button"
          onClick={handleStart}
          className="btn-primary btn-lg mx-2"
        >
          Start
        </button>

        <button
          type="button"
          onClick={handleStop}
          className="btn-danger btn-lg mx-2"
        >
          Stop
        </button>
      </div>
    </>
  );
};
