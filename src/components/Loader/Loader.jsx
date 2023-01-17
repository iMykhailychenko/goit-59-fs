export const Loader = () => {
  return (
    <>
      <div className="modal-backdrop fade show" />
      <div
        className="modal fade show d-flex align-items-center justify-content-center"
        style={{ display: 'block', height: '100vh' }}
      >
        <div className="spinner-border text-light">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
