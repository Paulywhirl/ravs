import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import posts from "../Announcements/posts.js";
import postsJSON from "../Announcements/posts.json";
import "./AnnouncementForm.scss"



class AnnouncementForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      department: '',
      message: ''
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

  handleKeyDown(event) {
      if (event.keyCode === 9) { // tab was pressed
          event.preventDefault();
          var val = this.state.message,
          start = event.target.selectionStart,
          end = event.target.selectionEnd;
          this.setState(
              {
                  message: val.substring(0, start) + '\t' + val.substring(end)
              },
              () => {
                  this.refs.input.selectionStart = this.refs.input.selectionEnd = start + 1
              });
      }
 }

  render() {
    return (
      <div className="formtest">

        <h3>Create an Annoucement</h3>
        <hr />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title: <br />
            <input className="title"
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="message">
            Message: <br />
            <textarea className="messageBox"
            rows="30" cols="100"
            ref="input"
            name="message"
            type="text"
            onKeyDown={this.handleKeyDown.bind(this)}
            value={this.state.message}
            onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        <br />
        <div>
          <Link to="/announcements">
            <Button
            type="button">Cancel</Button>
          </Link>
        </div>

      </div>
    );
  }

}

export default AnnouncementForm;
