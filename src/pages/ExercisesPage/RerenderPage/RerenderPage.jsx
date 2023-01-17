import { useState, useCallback, memo } from 'react';

const Button = memo(({ label, onClick }) => {
  console.log('Button');
  return (
    <button className="btn btn-outline-light" type="button" onClick={onClick}>
      {label}
    </button>
  );
});

Button.displayName = 'Button';

const RerenderPage = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  console.log('Rerender');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2>{counter}</h2>

      <Button label="Click me!" onClick={handleCount} />
    </div>
  );
};

export default RerenderPage;
