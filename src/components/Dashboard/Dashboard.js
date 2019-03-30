import React, { Component } from 'react';
import './Dashboard.scss';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Collapse, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      contact: props.contact
    }
  }

  componentDidMount() {
    try {
      fetch(`http://127.0.0.1:5000/upcomingEvents`)
      .then(
        response => {return response.json()}
      )
      .then(
        data =>
        this.setState({
          events: data.events
        })
      )
    } catch {

    }
  }

  renderSessions(){
    if(this.state.events.length === 0){
      return this.state.events.map((eventdata,index1)=>{
        return (
          <div className="cards">
            <Card>
            <CardHeader style={{fontSize: 15}}>{eventdata.title}</CardHeader>

            </Card>
          </div>
        )
      })
    } else {
      return (
        <div clssName="no-session">
          <p>No Upcoming Sessions in the next two days</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="dashboard">

        <h1>Dashboard</h1>
        <hr />
        <br />

        <h3><i>Welcome to the Radio Western Volunteer website!</i></h3>
        <br />
        <a href="http://radiowestern.ca/stream" target="_blank" id="btnstyle" className="btn btn-dark">
        <h4>
        <i className="far fa-play-circle"></i> Listen Live</h4></a>
        <br />
        <br />
        <a href="http://radiowestern.ca" target="_blank" id="btnstyle" className="btn btn-dark">
        <h4>
        <i className="fas fa-external-link-alt"></i> Main Website</h4></a>

        <br />
        <br />
        <hr />
        <br />

        <div className="container">
          <h3>Upcoming Sessions</h3>
          <div>{this.renderSessions()}</div>
        </div>


      </div>

    )
  }
}

export default Dashboard;
