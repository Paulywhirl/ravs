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
      events: [props.events],
      contact: props.contact
    }
  }

  render() {
    return (
      <div className="dashboard">

        <h1>Dashboard</h1>
        <hr />
        <br />

        <h3><i>Welcome to the Radio Western Volunteer website!</i></h3>
        <h5>Check out the upcoming events and view your progress</h5>
        <br />
        <a href="http://radiowestern.ca/stream" target="_blank" class="btn btn-dark"><h4><i class="far fa-play-circle"></i> Listen Live</h4></a>
        <br />
        <br />
        <a href="http://radiowestern.ca" target="_blank" class="btn btn-dark"><h4><i class="fas fa-external-link-alt"></i> Main Website</h4></a>

        <br />
        <br />
        <hr />
        <br />

        <div className="container">
          <h3>Upcoming Sessions???</h3>

          {/*this.state.eventList.map((eventdata,index1)=>{
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
          })*/}

        </div>


      </div>

    )
  }
}

export default Dashboard;
