import React, { Component } from 'react';
import { Button, NavLink} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './Progress.scss';
import progressgraph from "./pgraph.json";
import lockimage from '../../assets/icons/lock1.png';

var customData = require("./pgraph.json");


class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "dark"
    };
    console.log(progressgraph['session progression'].Marketing[1].completed)
  }

  getData(){
    this.setState({ progressList: progressgraph })
  }

  getButtonColor(){

  }


  render() {
    return (
      <div className="progressinfo">

        <h1>Progress Graph</h1>
        <hr />
        <br />

        <div className="rowContent">

          <div className="contain">
            <h4>Intro to CHRW: </h4>
            <br />
          </div>
          <div>
            <Button className="disabled" color="dark">100</Button>
          </div>
        </div>

        <div className="rowContent">
          <div className="contain">
            <h4>On-Air: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">101</Button> <Button color={progressgraph['session progression'].Marketing[1].completed ? "dark" : "light"}>102</Button> <Button color="dark">103</Button>
          </div>
        </div>

        <div className="rowContent">
          <div className="contain">
            <h4>Music: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">201</Button> <Button color="dark">202</Button>
          </div>
        </div>


        <div className="rowContent">
          <div className="contain">
            <h4>News: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">301</Button>
          </div>
        </div>

        <div className="rowContent">
          <div className="contain">
            <h4>Sports: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">401</Button>
          </div>
        </div>


        <div className="rowContent">
          <div className="contain">
            <h4>Spoken Word: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">501</Button> <Button color="dark">502</Button>
          </div>
        </div>


        <div className="rowContent">
          <div className="contain">
            <h4>Podcasting: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">POD1</Button> <Button color="dark">POD2</Button> <Button color="dark">POD3</Button> <Button color="dark">POD4</Button>
          </div>
        </div>

        <div className="rowContent">
          <div className="contain">
            <h4>Production: </h4>
            <br />
          </div>
          <div>
            <Button color="dark">601</Button> <Button color="dark">602</Button> <Button color="dark">603</Button>
          </div>
        </div>


      </div>

    )
  }
}

export default Progress;
