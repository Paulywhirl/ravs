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
      <div className="formtest">

        <h3>Create an Annoucement</h3>
        <hr />

        <form onSubmit={this.handleSubmit}>
          <label>
            Title: <br />
            <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Department: <br />
            <input name="department" type="text" value={this.state.department} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Description: <br />
            <input className="descriptionbox" name="description" type="text" value={this.state.description} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        <br />
        <div>
          <Link to="/announcements">
            <Button>Back</Button>
          </Link>
        </div>

      </div>
    );
  }

}

export default AnnouncementForm;
