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

// prevProps.label === this.props.label
// prevProps.onClick === this.props.onClick
// class Button extends PureComponent {
//   render() {
//     const { label, onClick } = this.props;
//     console.log('Button');

//     return (
//       <button className="btn btn-outline-light" type="button" onClick={onClick}>
//         {label}
//       </button>
//     );
//   }
// }

export const Rerender = () => {
  const [counter, setCounter] = useState(0);

  // const handleCount = () => {
  //   setCounter(prev => prev + 1);
  // };

  const handleCount = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  // const handleCount = useMemo(() => {
  //   return () => {
  //     setCounter(prev => prev + 1);
  //   };
  // }, []);

  console.log('Rerender');
  return (
    <div className="d-flex sm flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2>{counter}</h2>

      <Button label="Click me!" onClick={handleCount} />
    </div>
  );
};

// 1 + 1 -> 2
// 2

// const cache = {};

// const sum = (a, b) => {
//   return a + b;
// };

// const memoSum = memo(sum);

// const sum = (a, b) => {
//   const key = String(a) + String(b);

//   if (cache[key] !== undefined) {
//     return cache[key];
//   }

//   const result = a + b;

//   cache[key] = result;
//   return result;
// };

// sum(1, 2) -> 3
// sum(1, 1) -> 2
// sum(1, 2) -> 3
// sum(1, 2) -> 3
// sum(1, 2) -> 3
// sum(1, 2) -> 3
// sum(1, 2) -> 3

// export class Rerender extends Component {
//   state = {
//     counter: 0,
//   };

//   handleCount = () => {
//     this.setState(prevState => ({ counter: prevState.counter + 1 }));
//   };

//   render() {
//     const { counter } = this.state;
//     console.log('Rerender');

//     return (
//       <div className="d-flex sm flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2>{counter}</h2>

//         <Button label="Click me!" onClick={this.handleCount} />
//       </div>
//     );
//   }
// }
