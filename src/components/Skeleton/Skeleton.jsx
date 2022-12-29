import classNames from 'classnames';

import styles from './Skeleton.module.css';

export const Skeleton = ({ className, ...props }) => {
  return <div className={classNames(styles.skeleton, className)} {...props} />;
};
