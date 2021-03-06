import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Header from './components/Header';
import Login from './Login';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        firstname: "",
        lastname: "",
        contactId: "",
        director: ""
      },
      data: {},
      loggedIn: false
    }

    this.callback = this.callback.bind(this)
  }

  callback(childState) {
    this.setState({
        user:{
          email: childState.email,
          firstname: childState.firstname,
          lastname: childState.lastname,
          contactId: childState.contactId,
          director: childState.director
        },
        data: childState.data,
        loggedIn: childState.isLoggedIn
    })
  }

  render() {
    return(
      <Router>
        <div id='app-background'>
          <Header />
          <Switch>
            <Route path="/" render={() => (
              this.state.loggedIn ? (
                <Redirect from="/" to="/homepage"/>
              ) : (
                <Login sendToParent={this.callback} />
              )
            )}/>
          </Switch>
          {
            this.state.loggedIn ? (
              <div className="app-container">
                <Route path='/homepage'
                render={(state) => <Sidebar data={this.state.data}
                                      user={this.state.user}/>}
                />
              </div>
            ) : (
              <div/>
            )
          }
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
