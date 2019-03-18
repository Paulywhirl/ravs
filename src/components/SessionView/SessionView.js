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
      event: this.props.location.state.event,
      contact: this.props.location.state.contact
    };
    console.log(this.state.contact)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
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

  handleRegister() {
    alert('You registered for this event of ' + this.state.event.title)
  }


  render() {
    return (
      <div className="sessionview">

        <h3>Session Information</h3>
        <hr />
        <br />
        <h3>{this.state.event.title}</h3>
        <br />
        <h4><b>When: </b>{this.state.event.start}</h4>
        <h4><b>Location: </b>{this.state.event.location}</h4>
        <h4><b>Spots Taken: </b>{this.state.event.confirmed_count}</h4>
        <h4><b>Registration Limit: </b>{this.state.event.reg_limit}</h4>
        <br />
        <h4>Come in and see what Radio Western is all about with Pam!
          In this intro session we will go over the Policies and Procedures as well as cover all the exciting opportunities
          at the station! This session is the first step in volunteering with the station.
        </h4>
        <br />
        <Button onClick={this.handleRegister}>Register</Button>
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
