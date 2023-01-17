const concat = (...args) => {
  return args.join(':');
};

export const formatTime = seconds => {
  const milliseconds = seconds % 1000;

  const secondsOfset = seconds / 1000;
  const secondsPassed = Math.floor(secondsOfset) % 60;
  const minutesPassed = Math.floor(secondsOfset / 60) % 60;

  return concat(
    String(minutesPassed).padStart(2, '0'),
    String(secondsPassed).padStart(2, '0'),
    String(milliseconds).padStart(3, '0'),
  );
};
