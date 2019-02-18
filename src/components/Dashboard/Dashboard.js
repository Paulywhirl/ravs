import React, { Component } from 'react';
import './Dashboard.scss';

import Calendar from '../Calendar/Calendar';
import Announcements from '../Announcements/Announcements';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">

        <div className="content-field">
          <h1>Dashboard</h1>
          <hr />
          <br />
          <h2>Current Annoucements:</h2>
          <h3>get info from annoucements page???</h3>
          <br />
          <br />
          <h2>Upcoming Sessions:</h2>
          <h3>get the upcoming sessions</h3>
          <br />
          <br />
          <h2>Weekly Calender:</h2>
          <h2>x x x x x x x x</h2>

        </div>
      </div>

    )
  }
}

export default Dashboard;
