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
      progress: JSON.parse(props.progress),
      progressToPresent: []
    }
  }

  componentDidMount() {
    let ptp = []
  }


  render() {
    return (
      <div className="progressinfo">

        <h1>Progress Graph</h1>
        <hr />
        <br />

        <div className="rowContent">

          <div className="contain">
            <h4>Intro to CHRW</h4>
          </div>
          <div>
            <Button color="light" className="btnstyle"> {progressgraph['session_progression'].Training.completed ? '' : (<i className="fas fa-lock"></i>)}  100</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>On-Air</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[1].completed ? '' : (<i className="fas fa-lock"></i>)}  101</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[2].completed ? '' : (<i className="fas fa-lock"></i>)} 102</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[3].completed ? '' : (<i className="fas fa-lock"></i>)} 103</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[4].completed ? '' : (<i className="fas fa-lock"></i>)} 104</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[5].completed ? '' : (<i className="fas fa-lock"></i>)} 105</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[6].completed ? '' : (<i className="fas fa-lock"></i>)} 106</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].On_Air[7].completed ? '' : (<i className="fas fa-lock"></i>)} 107</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Music</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].Music[1].completed ? '' : (<i className="fas fa-lock"></i>)} 201</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Music[2].completed ? '' : (<i className="fas fa-lock"></i>)} 202</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Music[3].completed ? '' : (<i className="fas fa-lock"></i>)} 203</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>News</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].News[1].completed ? '' : (<i className="fas fa-lock"></i>)} 301</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Sports</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].Sports[1].completed ? '' : (<i className="fas fa-lock"></i>)} 401</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Spoken Word</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].Spoken_Word[1].completed ? '' : (<i className="fas fa-lock"></i>)} 501</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Podcasting</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[1].completed ? '' : (<i className="fas fa-lock"></i>)} POD1</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[2].completed ? '' : (<i className="fas fa-lock"></i>)} POD2</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[3].completed ? '' : (<i className="fas fa-lock"></i>)} POD3</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[4].completed ? '' : (<i className="fas fa-lock"></i>)} POD4</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[5].completed ? '' : (<i className="fas fa-lock"></i>)} POD5</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[6].completed ? '' : (<i className="fas fa-lock"></i>)} POD6</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[7].completed ? '' : (<i className="fas fa-lock"></i>)} POD7</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[8].completed ? '' : (<i className="fas fa-lock"></i>)} POD8</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Podcasting[9].completed ? '' : (<i className="fas fa-lock"></i>)} POD9</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Production</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle">{progressgraph['session_progression'].Production[1].completed ? '' : (<i className="fas fa-lock"></i>)} 601</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Production[2].completed ? '' : (<i className="fas fa-lock"></i>)} 602</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Production[3].completed ? '' : (<i className="fas fa-lock"></i>)} 603</Button> <Button color="light" className="btnstyle">{progressgraph['session_progression'].Production[4].completed ? '' : (<i className="fas fa-lock"></i>)} 604</Button>
          </div>
        </div>

      </div>

    )
  }
}

export default Progress;
