import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';


function Header() {
  // will need a function to deal with sticky header

  return (
    <div className="header" id="myHeader">
        <img
        className="headerLogo"
        src="https://nextgatetech.com/assets/img/brand/white-color.png" alt="headerLogo" />
    </div>
  )
}

export default Header;
