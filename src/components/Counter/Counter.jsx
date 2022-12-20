export const Counter = () => {
  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        0
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Plus
        </button>

        <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Minus
        </button>
      </div>
    </div>
  );
};
