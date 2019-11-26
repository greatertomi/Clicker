import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => (
  <div className='header'>
    <FontAwesomeIcon icon={faHandPointer} size='4x' color='white' />
    <h2>Clicker</h2>
  </div>
);

export default Header;
