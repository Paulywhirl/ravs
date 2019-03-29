import React, { Component } from "react";
import './Header.scss';

import RadioWesternLogo from '../assets/RadioWesternLogo1.png';

class Header extends Component {
  render() {
    return (
      <nav className="nav" id="top">
        <a href="index.html">
  			   <img src={RadioWesternLogo} alt="Radio Western Logo" className="nav-image"/>
        </a>
  		</nav>
    )
  }
}

export default Header;
