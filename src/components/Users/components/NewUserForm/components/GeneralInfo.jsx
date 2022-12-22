export const GeneralInfo = () => {
  return (
    <>
      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Name</span>
          <input type="text" className="form-control" />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Email</span>
          <input type="email" className="form-control" />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>BIO</span>
          <textarea className="form-control" />
        </label>
      </div>
    </>
  );
};
