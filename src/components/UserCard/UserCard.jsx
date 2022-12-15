import { Fragment } from 'react';

import classNames from 'classnames';

import PropTypes from 'prop-types';

import styles from './UserCard.module.css';

const randomColor = () => {
  return Math.random() > 0.5 ? '#eee' : '#aaa';
};

const isOnline = true;
export const UserCard = ({ myKey, users }) => {
  //   const classNames = [styles.text, styles.item].join(' ');

  return users.map(user => {
    return (
      <Fragment key={user.id}>
        <p
          className={classNames(null, undefined, styles.text, isOnline && styles.item)}
          style={{
            backgroundColor: randomColor(),
          }}
        >
          {user.name}
        </p>
      </Fragment>
    );
  });
};

UserCard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};
