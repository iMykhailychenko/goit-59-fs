import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <div>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
