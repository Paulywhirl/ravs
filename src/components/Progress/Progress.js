import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Progress.scss';

class Progress extends Component {
  render() {
    return (
      <div className="progressinfo">

        <div className="content-field">
          <h1>Progress Graph</h1>
          <hr />
          <br />
          <h4>Intro to CHRW: <Button color="dark">100</Button></h4>
          <br />
          <h4>On-Air: <Button color="dark">101</Button> <Button color="dark">102</Button> <Button color="dark">103</Button></h4>
          <br />
          <h4>Music: <Button color="dark">201</Button> <Button color="dark">202</Button></h4>
          <br />
          <h4>News: <Button color="dark">301</Button></h4>
          <br />
          <h4>Sports: <Button color="dark">401</Button></h4>
          <br />
          <h4>Spoken Word: <Button color="dark">501</Button> <Button color="dark">502</Button></h4>
          <br />
          <h4>Podcasting: <Button color="dark">POD1</Button> <Button color="dark">POD2</Button> <Button color="dark">POD3</Button> <Button color="dark">POD4</Button></h4>
          <br />
          <h4>Production: <Button color="dark">601</Button> <Button color="dark">602</Button> <Button color="dark">603</Button></h4>
        </div>
      </div>

    )
  }
}

export default Progress;
