import { useEffect } from 'react';

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyClose);

    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show" />
      <div
        className="modal fade show"
        style={{ display: 'block' }}
        onClick={handleBackdropClick}
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
