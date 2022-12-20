import { PropTypes } from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100 w-100">
      <main className="tab-content p-5 h-100 w-100" style={{ minHeight: '100vh', maxWidth: 900 }}>
        <div className="tab-pane fade show active">{children}</div>
      </main>
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
