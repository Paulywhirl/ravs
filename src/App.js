import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Header from './components/Header';
import Login from './Login';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  callback(childState) {
    console.log(childState);
  }

  render() {
    return(
      <Router>
        <div id='app-background'>
          <Header />
          <Route exact path="/" render={() => (
            this.state.loggedIn ? (
              <div class="app-container">
                <Redirect path="/homepage" component={Sidebar}/>
              </div>
            ) : (
              <Login sendToParent={this.callback} />
            )
          )}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
