import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import "./login.scss"

import Loading from './Loading.js'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.validateRegister = this.validateRegister.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      registering: false,
      invalidLogin: false,
      error: "",
      loading: false
    };
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  validateRegister() {
    return this.state.email.length > 0 && this.state.password.length > 0
    && this.state.firstname.length > 0 && this.state.lastname.length > 0;
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

  handleChangeFirstName(event) {
    this.setState({
      firstname: event.target.value
    })
  }

  handleChangeLastName(event) {
    this.setState({
      lastname: event.target.value
    })
  }

  handleRegister() {
    this.setState({
      registering: true
    });
  }

  handleInvalidLogin = () => {

  }

  handleSubmit (event){
    event.preventDefault()
    this.setState({
      loading: true
    })
    const user = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })
    try {
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
            contactId: data.contactId,
            jwt_token: data.token,
            data: data.data,
            isLoggedIn: true,
            loading: true
          });
        })
      ).catch(function(error){
        console.log(error)
      })
    } catch(error) {
      console.log(error)
    }
  }

  handleRegisterAndSubmit = (event) => {
    event.preventDefault()
    const newUser = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    })
    fetch(`http://127.0.0.1:5000/register`, {
      method: 'post',
      crossDomain: true,
      headers: {'Content-Type': 'application/json'},
      body: newUser
    }).then(
      response => {return response.json()}
    ).then(
      data =>
      this.props.sendToParent({
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        isLoggedIn: true
      })
    )
  }


  render() {
    return (
      <div className="Login">
        {
          this.state.loading ? (
            <Loading />
          ) : (
        <div>
        <form>
          {
            !this.state.registering ? (
              <h2>Login</h2>
            ) : (
              <h2>Registering</h2>
            )
          }
          {
            this.state.registering && <div>
            <p className="paragraph">Remember! You must already be registered
            with Radio Westerns Wild Apricot service.</p>
            <FormGroup controlId="firstname" bsSize="large">
                <FormControl
                  autoFocus
                  type="firstname"
                  placeholder="Firstname"
                  onChange={this.handleChangeFirstName}
                />
            </FormGroup>
            <FormGroup controlId="lastname" bsSize="large">
                <FormControl
                  autoFocus
                  type="lastname"
                  placeholder="lastname"
                  onChange={this.handleChangeLastName}
                />
            </FormGroup> </div>
          }
          <FormGroup controlId="email" bsSize="large">
              <FormControl
                autoFocus
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChangeUser}
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
              <FormControl
                autoFocus
                type="password"
                placeholder="Password"
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
                disabled={!this.validateRegister()}
                type="button">
                Register & Sign in
              </Button>
            )
          }
          <p>{this.state.error}</p>
        </form>
        <Button
          onClick={() => this.setState({
            registering: false
          })}
          type="button"
          hidden={!this.state.registering}
          className="return">
          back
        </Button>
        </div>
      )
      }
      </div>
    )

  }

  // componentDidCatch = (error) => {
  //   console.log(error)
  // }

}
