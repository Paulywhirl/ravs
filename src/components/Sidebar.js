import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
      </div>

    )
  }
}

export default Sidebar;
