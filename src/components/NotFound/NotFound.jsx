import image from './pulp-fiction-john-travolta.gif';

export const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="not found" style={{ width: 300 }} />
      <p className="my-3">Opsss! No users here</p>
    </div>
  );
};
