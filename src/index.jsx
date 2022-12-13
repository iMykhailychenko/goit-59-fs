import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import images from './assets/images.json';

// ||, &&, ??, ... ? .. : ..

// true && img
// false && no image

// isModalOpen = false
// isModalOpen && <Modal>

// title && <p>title</p>
// title && <p>title</p>

const UserAvatar = ({ src, alt = 'test' }) => {
  // ....
  return <img width="150px" src={src || images[2]} alt={alt} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserAvatar alt="hello" />);
