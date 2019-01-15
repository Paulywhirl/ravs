import React, { Component } from "react";
import './Sidebar.scss';


const COMPONENTS = {
  dashboard: 'Dashboard',
  calendar: 'Calendar',
  announcements: 'Annoucements',
  profile: 'Profile',
  progress: 'Progress',
  settings: 'Settings',
  logout: 'Logout'
}

class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
        <nav class="sidebar-nav">
          <ul class="nav">
            <li class="nav-title">Overview</li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Calender
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Annoucements
              </a>
            </li>
            <li class="nav-title">User</li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Progress
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="nav-icon cui-speedometer"></i> Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

    )
  }
}

export default Sidebar;
