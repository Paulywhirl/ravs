import React, { Component } from 'react';

import Header from './components/Header';
import Login from './login';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return(
      <div id='app-background'>
        <Header />
        <Login />
        <Footer />
      </div>
    )
  }
}

export default App;
