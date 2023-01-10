import { Component, useEffect } from 'react';

export const Modal = ({ children, onClose }) => {
  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyClose = event => {
      console.log('in handleKeyClose');
      if (event.code === 'Escape') {
        onClose();
      }
    };

    console.log('componentDidMount');
    window.addEventListener('keydown', handleKeyClose);

    return () => {
      window.removeEventListener('keydown', handleKeyClose);
      console.log('componentWillUnmount');
    };
  }, [onClose]);

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div
        className="modal fade show"
        style={{ display: 'block' }}
        onClick={handleClose}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyClose);
//   }

//   handleKeyClose = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClose = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { children, onClose } = this.props;
//     return (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div
//           className="modal fade show"
//           style={{ display: 'block' }}
//           onClick={this.handleClose}
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={onClose}
//                 />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
