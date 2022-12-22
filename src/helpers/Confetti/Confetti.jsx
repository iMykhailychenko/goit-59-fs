import { useEffect, useState, useRef } from 'react';

import ConfettiComponent from 'react-confetti';
import ReactDOM from 'react-dom';

import EventEmitter from 'events';

const TIMEOUT = 4_000;
const ANIMATION_DURATION = 2_000;
const SCROLL_BAR_WIDTH = 20;

class ConfettiEmmiter extends EventEmitter {
  run = () => {
    this.emit('confetti', true);
  };

  close = () => {
    this.emit('confetti', false);
  };
}

export const confetti = new ConfettiEmmiter();

export const Confetti = () => {
  const [party, setParty] = useState(true);
  const [size, setSize] = useState({ y: window.innerHeight, x: window.innerWidth - SCROLL_BAR_WIDTH });

  useEffect(() => {
    const resize = () => setSize({ y: window?.innerHeight, x: window.innerWidth - SCROLL_BAR_WIDTH });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setParty(false);
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return ReactDOM.createPortal(
    <ConfettiComponent
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 100000, width: '100%', pointerEvents: 'none' }}
      numberOfPieces={party ? 200 : 0}
      gravity={0.3}
      onConfettiComplete={c => {
        setParty(false);
        c?.reset();
      }}
      width={size.x}
      height={size.y}
    />,
    document.body,
  );
};

export const ConfettiContainer = () => {
  const timeoutId = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    confetti.on('confetti', setIsOpen);
    return () => {
      confetti.off('confetti', setIsOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      timeoutId.current = setTimeout(() => {
        confetti.close();
      }, TIMEOUT);
    }

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [isOpen]);

  return isOpen && <Confetti />;
};
