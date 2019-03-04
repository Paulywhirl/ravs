import React, { Component } from 'react';
import './Profile.scss';

import ProfileIcon from '../../assets/icons/profile.png';

class Profile extends Component {
  render() {
    return (
      <div className="profile">

        <div className="content-field">
          <h1>Profile</h1>
          <hr />
          <br />
          <img src={ProfileIcon} alt="profileimage" class="profileimage"/>
          <h4>Change profile photo ></h4>
          <br />
          <h3><b>Name:</b> Jane Doe</h3>
          <h3><b>Email:</b> jdoe@uwo.ca</h3>
          <h3><b>Program:</b> Computer Science</h3>
          <h3><b>About Me:</b> 3rd year student who loves sports</h3>
          <h3><b>Interests:</b> Podcasts, reading, writing, hiking</h3>
          <h3><b>Why do I want to volunteer:</b> To learn more about what it takes to run a radio show</h3>
          <h3><b>Notifications:</b> OFF</h3>

        </div>
      </div>

    )
  }
}

export default Profile;
