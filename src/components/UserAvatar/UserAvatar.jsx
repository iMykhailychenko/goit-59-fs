import PropTypes from 'prop-types';

import images from '../../assets/images.json';

export const UserAvatar = ({ src, alt = 'test' }) => {
  // ...
  return <img width="150px" src={src || images[2]} alt={alt} />;
};

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
