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
          <h4>Change profile photo</h4>
          <br />
          <h3>Name: ?</h3>
          <h3>Email: ?</h3>
          <h3>Program: ?</h3>
          <h3>About Me: ?</h3>
          <h3>Interests: ?</h3>
          <h3>Why do I want to volunteer: ?</h3>
          <h3>Notifications: ?</h3>

        </div>
      </div>

    )
  }
}

export default Profile;
