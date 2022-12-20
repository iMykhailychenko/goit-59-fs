import React from 'react';

import ReactDOM from 'react-dom/client';

import { Product } from './components/Product/Product';

import './index.css';

// import images from './assets/images.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UserCard images={images} />);
root.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,
);
