import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

// import images from './assets/images.json';
import users from './assets/users.json';
import { UserCard } from './components/UserCard/UserCard';
import { UserCard2 } from './components/UserCard2/UserCard2';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UserCard images={images} />);
root.render(
  <React.StrictMode>
    <UserCard users={users} />
    <UserCard2 users={users} />
  </React.StrictMode>,
);
