import React, { Component } from "react";
import './Footer.scss';

import Wild_Apricot from '../assets/WildApricot.png';

class Footer extends Component {
  render() {
    return(
      <div id="footer">
        <p id="p1">Powered by
        <img src={Wild_Apricot}/>
        </p>
      </div>
    )
  }
}

export default Footer;
