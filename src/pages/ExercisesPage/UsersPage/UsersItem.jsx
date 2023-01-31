export const UsersItem = ({ user, onDelete }) => {
  const { id, name, email, bio, skills, isOpenToWork } = user;

  const handleDelete = () => onDelete(id);

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title d-flex" style={{ minHeight: 42 }}>
          {name}
          {isOpenToWork && (
            <p className="badge bg-success ms-3">Open to work</p>
          )}
        </h5>

        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <p className="card-text">{bio}</p>

        <div className="d-flex mb-2">
          {skills.map(skil => (
            <span key={skil} className="badge bg-dark me-1">
              {skil}
            </span>
          ))}
        </div>

        <div className="d-flex">
          <button
            type="button"
            className="card-link btn-link link-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
