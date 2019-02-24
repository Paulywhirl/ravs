import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import "./SessionView.scss"



class SessionView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      department: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    alert('A name was submitted: ' + this.state.title);
    event.preventDefault();

  }


  render() {
    return (
      <div className="sessionview">

        <h3>Session Information</h3>
        <hr />
        <br />
        <h3>Radio Western 100 - Introduction to 94.9 Radio Western</h3>
        <br />
        <h4>When: ?</h4>
        <h4>Location: ?</h4>
        <h4>Spaces Left: ?</h4>
        <h4>Registration: Intro Training 1000</h4>
        <br />
        <h4>Come in and see what Radio Western is all about with Pam!
          In this intro session we will go over the Policies and Procedures as well as cover all the exciting opportunities
          at the station! This session is the first step in volunteering with the station.
        </h4>
        <br />
        <Button>Register</Button>
        <br />
        <br />
        <div>
          <Link to="/calendar">
            <Button>Back</Button>
          </Link>
        </div>

      </div>
    );
  }

}

export default SessionView;
