import React, { Component } from 'react';
import './Settings.scss';

class Settings extends Component {
  render() {
    return (
      <div className="settings">

        <div className="content-field">
          <h1>Settings</h1>
          <hr />
          <br />
          <h2>Notification Settings:</h2>
          <h3>Notifications: ON/OFF</h3>
          <h3>Notification time for upcoming sessions: 6 hours</h3>
          <br />
          <br />
          <h2>Session Settings:</h2>
          <h3>View list of sessions</h3>
          <h3>Sessions on dashboard: 3 recent</h3>
          <br />
          <br />
          <h2>Annoucement Settings:</h2>
          <h3>View list of annoucements</h3>
          <h3>Annoucements on dashboard: 3 recent</h3>

        </div>
      </div>

    )
  }
}

export default Settings;
