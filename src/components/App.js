import React, { PropTypes } from 'react';
import Header from './Header.js';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
