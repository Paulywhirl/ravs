import React, { Component } from 'react';

import Header from './components/Header';
// import Login from './Login';
import Footer from './components/Footer';

import Calendar from './components/Calendar/Calendar'

class Main extends Component {

  render() {
    return(
      <div id='app-background'>
        <Header />
        <div>
          <Calendar/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
