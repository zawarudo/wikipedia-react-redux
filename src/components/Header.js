import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <h3>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/bookmarks">Bookmarks</Link>
    </h3>
  );
};

export default Header;
