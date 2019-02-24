import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Button, Badge, Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Collapse, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


import posts from "./posts";
import "./Announcements.scss"


class Announcements extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: posts
    };
  }

  getData(){
    this.setState({ postList: posts })
  }


  render() {
    return (
      <div className="announcements">
        <div className="animated fadeIn">

          <h1>Announcements</h1>
          <hr />

          <div>
            <Link to="/announcement/new">
              <Button>New Annoucement</Button>
            </Link>
          </div>

          <div>
            <Link to="/calendars/session">
              <Button>Go to session</Button>
            </Link>
          </div>

          {this.state.postList.map((postdata,index)=>{
            return <div className="cards">

                <Card>
                  <CardHeader style={{fontSize: 20}}>{postdata.title}</CardHeader>
                  <CardBody>
                    <CardTitle style={{fontSize: 15}}>Department: {postdata.department}</CardTitle>
                    <CardText style={{fontSize: 15}}>{postdata.description}</CardText>
                    <Button outline color="secondary">Edit</Button>
                  </CardBody>
                </Card>
              </div>
          })}

        </div>
      </div>
    );
  }

}

export default Announcements;
