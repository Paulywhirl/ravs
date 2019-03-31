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
      postList: posts,
      user: {},
      announcements: []
    };
  }

  componentDidMount(){
    this.setState({
      user: this.props.user
    })
    try{
      fetch(`http://127.0.0.1:5000/announcements`)
      .then(response => {return response.json()})
      .then(
        data =>
        this.setState({
          announcements: data
        })
      )
      console.log(this.state.announcements)
    } catch {
      console.log("could not retrieve announcements")
    }
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
          {
            this.state.user.director ? (
              <Link to="/announcement/new">
                <Button
                type="button">New Annoucement</Button>
              </Link>
            ) : (
              <div/>
            )
          }

          </div>

          {this.state.announcements.slice(0,10).map((postdata,index)=>{
            return <div className="cards">

                <Card>
                  <CardHeader style={{fontSize: 20}}>{postdata.title}</CardHeader>
                  <CardBody>
                    <CardText style={{fontSize: 15}}>{postdata.message}</CardText>
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
