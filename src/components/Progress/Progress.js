import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
          <Button color="primary">100</Button>

          <h4>On-Air Training:</h4>
          <Button color="primary">101</Button> <Button color="primary">102</Button> <Button color="primary">103</Button>

          <h4>Music:</h4>
          <Button color="primary">200</Button> <Button color="primary">201</Button> <Button color="primary">202</Button>

          <h4>Marketing:</h4>
          <Button color="primary">300</Button> <Button color="primary">301</Button> <Button color="primary">302</Button>

          <h4>News/Spoken Word:</h4>
          <Button color="primary">400</Button> <Button color="primary">401</Button> <Button color="primary">402</Button>

          <h4>Sports:</h4>
          <Button color="primary">500</Button> <Button color="primary">501</Button> <Button color="primary">502</Button>

          <h4>Radio Production:</h4>
          <Button color="primary">600</Button> <Button color="primary">601</Button> <Button color="primary">602</Button>

          <h4>Music Production:</h4>
          <Button color="primary">700</Button> <Button color="primary">701</Button> <Button color="primary">702</Button>


        </div>
      </div>

    )
  }
}

export default Progress;
