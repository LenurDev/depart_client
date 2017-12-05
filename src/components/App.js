import React from 'react';
import NavBar from './NavBar';

import '../sass/index.scss';

export default (props) => (
  <div>
    <NavBar />
    <div id="page-wrapper">
      {props.children}
    </div>
  </div>
);
