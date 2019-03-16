import React, { Component } from 'react';
import './Dashboard.scss';
import { Badge, Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Collapse, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Calendar from '../Calendar/Calendar';
import Announcements from '../Announcements/Announcements';

import posts from "../Announcements/posts.js";
import events from "../Calendar/events.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: posts,
      eventList: events
    };
  }

  getData(){
    this.setState({ postList: posts })
    this.setState({ postList: events })
  }


  render() {
    return (
      <div className="dashboard">

        <h1>Dashboard</h1>
        <hr />
        <br />

        <div className="rowC">
          <div className="container">
            <h2>Current Annoucements:</h2>
            {this.state.postList.map((postdata,index)=>{

              if(index<1) {
                return <div className="cards">
                    <Card>
                      <CardHeader style={{fontSize: 15}}>{postdata.title}</CardHeader>
                      <CardBody>
                        <CardTitle style={{fontSize: 12}}>Department: {postdata.department}</CardTitle>
                        <CardText style={{fontSize: 12}}>{postdata.description}</CardText>
                      </CardBody>
                    </Card>
                  </div>
              }
            })}
          </div>

          <div className="container">
            <h2>Upcoming Sessions:</h2>
            {this.state.eventList.map((eventdata,index1)=>{
              if(index1<1) {
                return <div className="cards">
                    <Card>
                      <CardHeader style={{fontSize: 15}}>{eventdata.title}</CardHeader>
                      <CardBody>
                        <CardText style={{fontSize: 12}}>{eventdata.description}</CardText>
                    </CardBody>
                    </Card>
                  </div>
                }
            })}
          </div>
          <br />
        </div>

        <hr />
        <br />
        <h2>Weekly Calender:</h2>

        <br />
        <br />


      </div>

    )
  }
}

export default Dashboard;
