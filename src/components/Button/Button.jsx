import classNames from 'classnames';

export const Button = ({ type = 'button', className = 'btn-primary', isLoading, children, disabled, ...props }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames('btn', className)} {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="ms-2">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
