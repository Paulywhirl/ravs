import React, { Component } from "react";
import './Footer.scss';

import Wild_Apricot from '../assets/WildApricot.png';

class Footer extends Component {
  render() {
    return(
      <div id="footer">
        <p>Powered By </p>
        <img src={Wild_Apricot}/>
      </div>
    )
  }
}

export default Footer;
