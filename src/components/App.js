import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/bookmarks">Bookmarks</Link>

      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
