import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import "./login.scss"

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
      hideMoreInfo: true,
      invalid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this)
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
      body: user
    }).then(
      response => {return response.json()}
      // function(response) {
      // if(response.status === 401) {
      //   this.setState({
      //     invalid: true
      //   })
      // } else {
      //   return response.json()
      // }
    // }
  )
    .then(
      data =>
      this.setState({
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        hideMoreInfo: data.curr
      })
    )
    .catch(
      console.log("error")
      //incorrect username or password
    );

  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <FormGroup controlId="email" bsSize="large">
              <FormControl
                autoFocus
                type="email"
                placeHolder="Email"
                value={this.state.email}
                onChange={this.handleChangeUser}
                disabled={this.state.hideMoreInfo === false ? true : false}
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
              <FormControl
                autoFocus
                type="password"
                placeHolder="Password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                disabled={this.state.hideMoreInfo === false ? true : false}
              />
          </FormGroup>
          {
            this.state.invalid && <div>
            <p className="paragraph">Invalid email or password (or not associated with Wild Apicrot)</p>
            </div>
          }
          {
            !this.state.hideMoreInfo && <div>
            <p className="paragraph">Looks like you're a newcomer! let's get some more information so we can get you started</p>
            <FormGroup controlId="firstname" bsSize="large">
                <FormControl
                  autoFocus
                  type="firstname"
                  placeHolder="Firstname"
                />
            </FormGroup>
            <FormGroup controlId="Lastname" bsSize="large">
                <FormControl
                  autoFocus
                  type="lastname"
                  placeHolder="lastname"
                />
            </FormGroup> </div>
          }
          {
            this.state.hideMoreInfo ? (
              <Button
              id="submit"
              block
              bsSize="lg"
              disabled={!this.validateForm()}
              type="submit"
              >Sign in
            </Button>) : (<Button
              id="submit"
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
