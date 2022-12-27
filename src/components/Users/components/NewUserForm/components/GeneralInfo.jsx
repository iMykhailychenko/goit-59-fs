export const GeneralInfo = ({ name, email, bio, onChange }) => {
  return (
    <>
      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Name</span>
          <input
            name="name"
            type="text"
            className="form-control"
            value={name}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Email</span>
          <input
            name="email"
            type="email"
            className="form-control"
            value={email}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>BIO</span>
          <textarea
            name="bio"
            className="form-control"
            value={bio}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  );
};
