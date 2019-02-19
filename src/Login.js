import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import "./login.scss"

const axios = require('axios')
const baseURL = "http://127.0.0.1:5000"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      hideMoreInfo: true
    };
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChangeUser(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit (event){
    event.preventDefault()
    const user = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })
    fetch(`http://127.0.0.1:5000/login`, {
      method: 'post',
      crossDomain: true,
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(
      response => {return response.json()}
    ).then(
      data =>
      this.setState({
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        hideMoreInfo: data.curr
      })
    ).then(
      //determine next action
    )
    .catch(
      //incorrect username or password
    );

  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChangeUser}
                disabled={this.state.hideMoreInfo === false ? true : false}
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
              <FormControl
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                disabled={this.state.hideMoreInfo === false ? true : false}
              />
          </FormGroup>
          {
            !this.state.hideMoreInfo && <div>
            <p className="paragraph">Looks like you're a newcomer! let's get some more information so we can get you started</p>
            <FormGroup controlId="firstname" bsSize="large">
              <ControlLabel>First Name</ControlLabel>
                <FormControl
                  autoFocus
                  type="firstname"
                />
            </FormGroup>
            <FormGroup controlId="lastname" bsSize="large">
              <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  autoFocus
                  type="lastname"
                />
            </FormGroup> </div>
          }
          {
            this.state.hideMoreInfo ? (
              <Button
              block
              bsSize="lg"
              disabled={!this.validateForm()}
              type="submit"
              >Sign in
            </Button>) : (<Button
              block
              bsSize="lg"
              disabled={!this.validateForm()}
              type="submit"
            >
              Register & Sign in
            </Button>)
          }
        </form>
      </div>
    )
  }

}
// export default Login;
