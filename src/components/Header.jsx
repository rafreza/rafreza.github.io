import React from 'react';
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap'

function Header(props) {
  return (
    <div className="wrapper">
      <h1 className="header-text">The Shoppies</h1>
    </div>
  );
}

export default Header;