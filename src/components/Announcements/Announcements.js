import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Badge, Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row, Collapse, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


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

          {this.state.postList.map((postdata,index)=>{
            return <div className="cards">

                <Card>
                  <CardHeader style={{fontSize: 20}}>{postdata.title}</CardHeader>
                  <CardBody>
                    <CardTitle style={{fontSize: 15}}>Department: {postdata.department}</CardTitle>
                    <CardText style={{fontSize: 15}}>{postdata.description}</CardText>
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
