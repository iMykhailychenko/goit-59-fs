import { useEffect, useState, useRef } from 'react';

import axios from 'axios';

const CODE = 'ERR_CANCELED';

const LongRequestPage = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const controllerRef = useRef(new AbortController());

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await axios.get('https://goit-fs.netlify.app/api/long', {
          signal: controllerRef.current.signal,
        });
        setIsDone(true);
      } catch (e) {
        if (e.code !== CODE) {
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      controllerRef.current.abort();
    };
  }, []);

  return (
    <div className="my-4">
      <p>
        {isDone && 'Success - request ended'}
        {isError && 'Error - no data'}
        {isLoading && 'Loading ...'}
      </p>

      <button
        onClick={() => controllerRef.current.abort()}
        className="btn btn-secondary mt-4"
        type="button"
      >
        Reject
      </button>
    </div>
  );
};

// class LongRequestPage extends Component {
//   state = {
//     isError: false,
//     isLoading: false,
//     isDone: false,
//   };

//   controller = new AbortController();

//   async componentDidMount() {
//     this.setState({ isLoading: true, isError: false });

//     try {
//       await axios.get('https://goit-fs.netlify.app/api/long', {
//         signal: this.controller.signal,
//       });
//       this.setState({ isDone: true });
//     } catch (e) {
//       if (e.code !== CODE) {
//         this.setState({ isError: true });
//       }
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   componentWillUnmount() {
//     this.controller.abort();
//   }

//   handleStopRequest = () => {
//     this.controller.abort();
//   };

//   render() {
//     const { isError, isLoading, isDone } = this.state;

//     return (
//       <div className="my-4">
//         <p>
//           {isDone && 'Success - request ended'}
//           {isError && 'Error - no data'}
//           {isLoading && 'Loading ...'}
//         </p>

//         <button
//           onClick={this.handleStopRequest}
//           className="btn btn-secondary mt-4"
//           type="button"
//         >
//           Reject
//         </button>
//       </div>
//     );
//   }
// }

export default LongRequestPage;
