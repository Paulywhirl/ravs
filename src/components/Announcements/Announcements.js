import React, {Component} from "react";
import ReactDOM from 'react-dom';

import posts from "./posts";
import "./Announcements.scss"


class Announcements extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'postsList': []
    };
  }


  render() {
    return (
      <div class="nav-announcements">

        <h1>Announcements</h1>
        {posts.map((postdata,index)=>{
          return <div>
              <hr />
              <h3>{postdata.title}</h3>
              <p class="p1">Department: {postdata.department}</p>
              <p class="p1">{postdata.description}</p>
            </div>
        })}


      </div>
    );
  }

}

export default Announcements;
