import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import "./login.scss"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      hideMoreInfo: true,
      invalid: false,
      registering: false
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

  handleRegister() {
    this.setState({
      registering: true,
      hideMoreInfo: false
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
      body: user
    }).then(
      response => {return response.json()}
    ).then(
      data =>
      this.setState({
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname
      }, () => {
        this.props.sendToParent({
          email: this.state.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          isLoggedIn: true
        });
      })
    )

  }

  handleRegisterAndSubmit = (event) => {
    event.preventDefault()
  }


  render() {
    return (
      <div className="Login">
        <form>
          {
            !this.state.registering ? (
              <h2>Login</h2>
            ) : (
              <h2>Registering</h2>
            )
          }
          {
            !this.state.hideMoreInfo && <div>
            <p className="paragraph">Looks like you're a newcomer! let's get some more information so we can get you started</p>
            <FormGroup controlId="firstname" bsSize="large">
                <FormControl
                  autoFocus
                  type="firstname"
                  placeholder="Firstname"
                />
            </FormGroup>
            <FormGroup controlId="lastname" bsSize="large">
                <FormControl
                  autoFocus
                  type="lastname"
                  placeHolder="lastname"
                />
            </FormGroup> </div>
          }
          <FormGroup controlId="email" bsSize="large">
              <FormControl
                autoFocus
                type="email"
                placeHolder="Email"
                value={this.state.email}
                onChange={this.handleChangeUser}
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
              <FormControl
                autoFocus
                type="password"
                placeHolder="Password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
          </FormGroup>
            <Button
            id="submit"
            onClick={this.handleSubmit}
            block
            bsSize="lg"
            hidden={this.state.registering}
            disabled={!this.validateForm()}
            type="button">
            Sign in
          </Button>
          {
            !this.state.registering ? (
              <Button
                onClick={this.handleRegister}
                block
                bsSize="lg"
                type="button">
                Register
              </Button>
            ) : (
              <Button
                onClick={this.handleRegisterAndSubmit}
                block
                bsSize="lg"
                type="button">
                Register & Sign in
              </Button>
            )
          }
        </form>
      </div>
    )
  }

}
// export default Login;
