import React, { Component } from 'react';

import Header from './components/Header';
import Login from './Login';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.scss';

class App extends Component {

  render() {
    return(
      <div id='app-background'>
        <Header />

        <div class ="app-container">
          <Sidebar />
          <Dashboard />
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
