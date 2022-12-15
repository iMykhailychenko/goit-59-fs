import { Fragment } from 'react';

import PropTypes from 'prop-types';

import styles from './UserCard2.module.css';

console.log(styles);

export const UserCard2 = ({ myKey, users }) => {
  return users.map(user => {
    return (
      <Fragment key={user.id}>
        <p className={styles.text}>{user.name}</p>
      </Fragment>
    );
  });
};

UserCard2.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};
