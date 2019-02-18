import React, { Component } from 'react';
import './Progress.scss';

class Progress extends Component {
  render() {
    return (
      <div className="progressinfo">

        <div className="content-field">
          <h1>Progress</h1>
          <hr />
          <br />
          <h3>Volunteer Progress Graph:</h3>
          <br />
          <h4>Intro to CHRW:</h4>
          <h4>On-Air Training:</h4>
          <h4>Music:</h4>
          <h4>Marketing:</h4>
          <h4>News/Spoken Word:</h4>
          <h4>Sports:</h4>
          <h4>Radio Production:</h4>
          <h4>Music Production:</h4>

        </div>
      </div>

    )
  }
}

export default Progress;
