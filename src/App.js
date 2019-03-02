import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Header from './components/Header';
import Login from './Login';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirected: false
    }
  }



  render() {
    return(
      <div id='app-background'>
        <Header />
        <Router>
          {
            !this.state.redirect ? (
              <div>
                <Route path="/login" component={Login}/>
              </div>
            ) : (
              <div>
                <Route path="/homepage" component={Sidebar}/>
              </div>
            )
          }
        </Router>

        <Footer />
      </div>
    )
  }
}

export default App;
