export const UsersStats = ({ users }) => {
  const openToWorkCount = users.filter(user => user.isOpenToWork).length;

  return (
    <>
      <p>Total: {users.length}</p>
      <p>Open to work: {openToWorkCount}</p>
    </>
  );
};
