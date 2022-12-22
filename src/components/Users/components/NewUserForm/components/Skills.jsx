export const Skills = () => {
  return (
    <fieldset className="mt-3">
      <legend className="h6">Skills:</legend>

      <div className="d-flex">
        <div className="form-check me-5">
          <label className="form-check-label">
            <span>React</span>
            <input type="checkbox" className="form-check-input" />
          </label>
        </div>
        <div className="form-check me-5">
          <label className="form-check-label">
            <span>Vue</span>
            <input type="checkbox" className="form-check-input" />
          </label>
        </div>
        <div className="form-check me-5">
          <label className="form-check-label">
            <span>Angular</span>
            <input type="checkbox" className="form-check-input" />
          </label>
        </div>
      </div>
    </fieldset>
  );
};
