import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ClickOutside from "react-click-outside";


import './Sidebar.scss';
import DashboardIcon from '../assets/icons/dashboard.png';
import CalendarIcon from '../assets/icons/calendar.png';
import AttendanceIcon from '../assets/icons/attendance.png';
import AnnouncementsIcon from '../assets/icons/announcements.png';
import ProfileIcon from '../assets/icons/profile.png';
import ProgressIcon from '../assets/icons/progress.png';
import SettingsIcon from '../assets/icons/settings.png';
import LogoutIcon from '../assets/icons/logout.png';

import Dashboard from './Dashboard/Dashboard';
import Calendar from './Calendar/Calendar';
import Announcements from './Announcements/Announcements';
import Profile from './Profile/Profile';
import Progress from './Progress/Progress';
import Settings from './Settings/Settings';


const COMPONENTS = {
  dashboard: 'Dashboard',
  calendar: 'Calendar',
  announcements: 'Announcements',
  profile: 'Profile',
  progress: 'Progress',
  settings: 'Settings',
  logout: 'Logout'
}

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
  }};

  render() {
    return (
      <div class="sidebar">
        <Router>
            <Route render={({ location, history }) => (
              <React.Fragment>
              <ClickOutside onClickOutside={() => {
                this.setState({ expanded: false });
              }}>

                <SideNav
                    expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded });
                    }}
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                        //console.log(selected);
                    }}
                >
              <SideNav.Toggle/>

              <SideNav.Nav defaultSelected="dashboard">
                <NavItem eventKey="dashboard">
                    <NavIcon>
                        <img src={DashboardIcon} alt="Dashboard" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="calendar">
                    <NavIcon>
                        <img src={CalendarIcon} alt="Calendar" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Calendar
                    </NavText>
                </NavItem>
                <NavItem eventKey="announcements">
                    <NavIcon>
                        <img src={AnnouncementsIcon} alt="Announcements" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Announcements
                    </NavText>
                </NavItem>
                <NavItem eventKey="profile">
                    <NavIcon>
                        <img src={ProfileIcon} alt="Profile" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Profile
                    </NavText>
                </NavItem>
                <NavItem eventKey="progress">
                    <NavIcon>
                        <img src={ProgressIcon} alt="Progress" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Progress
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                    <NavIcon>
                        <img src={SettingsIcon} alt="Settings" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Settings
                    </NavText>
                </NavItem>
                <NavItem eventKey="logout">
                    <NavIcon>
                        <img src={LogoutIcon} alt="Logout" class="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Logout
                    </NavText>
                </NavItem>

              </SideNav.Nav>
            </SideNav>
            </ClickOutside>
              <div id="main">
                   <Route path="/" exact component={Dashboard} />
                   <Route path="/dashboard" component={Dashboard} />
                   <Route path="/calendar" component={Calendar} />
                   <Route path="/announcements" component={Announcements} />
                   <Route path="/profile" component={Profile} />
                   <Route path="/progress" component={Progress} />
                   <Route path="/settings" component={Settings} />
              </div>
            </React.Fragment>
            )}
            />
        </Router>
      </div>

    )
  }
}

export default Sidebar;
