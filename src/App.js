import React, { Component } from 'react';

import Header from './components/Header';
import Login from './Login';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Calendar from './components/Calendar/Calendar'
import Announcements from './components/Announcements/Announcements'
import './App.scss';

class App extends Component {

  render() {
    return(
      <div id='app-background'>
        <Header />

        <div class ="app-container">

          <Sidebar />

        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
