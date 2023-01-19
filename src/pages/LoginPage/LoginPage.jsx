// import { confetti } from '../../components/Confetti/Confetti';

const LoginPage = () => {
  // TODO run on login
  // confetti.run();

  return (
    <>
      <form className="w-100" style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label className="form-label d-block">
            <p>Email address</p>
            <input type="text" className="form-control" />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">
            <p>Password</p>
            <input type="text" className="form-control" />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;
