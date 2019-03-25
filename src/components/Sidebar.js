import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ClickOutside from "react-click-outside";


import './Sidebar.scss';
import DashboardIcon from '../assets/icons/dashboard.png';
import CalendarIcon from '../assets/icons/calendar.png';
import AttendanceIcon from '../assets/icons/attendance.png';
import AnnouncementsIcon from '../assets/icons/announcements.png';
import ProfileIcon from '../assets/icons/profile.png';
import ProgressIcon from '../assets/icons/progress.png';
import LogoutIcon from '../assets/icons/logout.png';

import Dashboard from './Dashboard/Dashboard';
import Calendar from './Calendar/Calendar';
import Announcements from './Announcements/Announcements';
import Profile from './Profile/Profile';
import Progress from './Progress/Progress';
import AnnouncementForm from './AnnouncementForm/AnnouncementForm';
import SessionView from './SessionView/SessionView';


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
      expanded: false,
      data: "",
      contact: "",
      events: []
    }
  };

  componentDidMount() {
    this.state = {
      expanded: false,
      data: this.props.data,
      contact: this.props.contact,
      events: JSON.parse(this.props.data.events)
    }
  }

  componentWillUnmount() {
    this.props.history.goForward();
  }

  render() {
    return (
      <div className="sidebar">
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
                        <img src={DashboardIcon} alt="Dashboard" className="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="calendar">
                    <NavIcon>
                        <img src={CalendarIcon} alt="Calendar" className="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Calendar
                    </NavText>
                </NavItem>
                <NavItem eventKey="announcements">
                    <NavIcon>
                        <img src={AnnouncementsIcon} alt="Announcements" className="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Announcements
                    </NavText>
                </NavItem>
                <NavItem eventKey="profile">
                    <NavIcon>
                        <img src={ProfileIcon} alt="Profile" className="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Profile
                    </NavText>
                </NavItem>
                <NavItem eventKey="progress">
                    <NavIcon>
                        <img src={ProgressIcon} alt="Progress" className="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Progress
                    </NavText>
                </NavItem>
                <NavItem eventKey="logout">
                    <NavIcon>
                        <img src={LogoutIcon} alt="Logout" className="icon-image"/>
                    </NavIcon>
                    <NavText>
                        Logout
                    </NavText>
                </NavItem>

              </SideNav.Nav>
            </SideNav>
            </ClickOutside>
              <div id="main">
                   <Route path="/homepage" exact component={Dashboard} />
                   <Route path="/dashboard" component={Dashboard} />
                   <Route path="/calendar" exact
                   render={(state) => <Calendar events = {this.state.events}
                              contact = {this.state.contact}
                              progress = {this.state.data.progress_graph}/>} />
                   <Route path="/announcements" component={Announcements} />
                   <Route path="/profile" component={Profile} />
                   <Route path="/progress" component={Progress} />
                   <Route path="/announcement/new" exact component={AnnouncementForm} />
                   <Route path="/calendar/session/:id" exact component={SessionView} />
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
