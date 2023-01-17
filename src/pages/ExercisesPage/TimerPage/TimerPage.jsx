import { useEffect, useState, useRef } from 'react';

import { Button } from '../../../components/Button/Button';
import { formatTime } from '../../../helpers/time';

const TimerPage = () => {
  const ref = useRef(null);
  const [time, setTime] = useState(0);

  const handleStartTimer = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setTime(prev => prev + 1);
        console.log('setInterval');
      }, 0);
    }
  };

  const handleStopTimer = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  useEffect(() => {
    return () => {
      handleStopTimer();
    };
  }, []);

  return (
    <>
      <p className="h1 mb-4 text-center">{formatTime(time)}</p>

      <div className="d-flex justify-content-center">
        <Button className="btn-danger btn-lg mx-2" onClick={handleStopTimer}>
          Stop
        </Button>

        <Button className="btn-primary btn-lg mx-2" onClick={handleStartTimer}>
          Start
        </Button>
      </div>
    </>
  );
};

export default TimerPage;
