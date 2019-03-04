import React, {Component} from "react";
import {Button} from "react-bootstrap";
import moment from 'moment';

import './Event.scss'


class Event extends Component {

  constructor(props){
    super(props);
    this.state = {
      userID: 0,
      eventID: 12,
      eventTitle: 'Radio Training - 100',
      eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque dui sed consequat egestas. Fusce ac ultricies ex. Phasellus ac dolor lacus. Aliquam erat volutpat. Vestibulum eleifend elit quis eros dapibus laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vel sem turpis. Integer facilisis augue a pulvinar lacinia. Nam purus libero, sollicitudin ac porta sed, posuere at sem. Duis iaculis nisl felis, et tincidunt lacus malesuada ut. In hac habitasse platea dictumst. Donec interdum magna mollis, suscipit metus vel, fringilla nunc. Donec volutpat vel velit a interdum. Aenean porttitor dictum pellentesque. Nunc et urna non ipsum faucibus finibus at sit amet mi. Pellentesque quis porta eros.',
      spacesLeft: 3,
      spacesOccupied: 4,
      startTime: moment().format('dddd,  14 2019, 10:30 a'),
      endTime: moment().format('January 14th 2019, 12:30:00 p'),
      location: 'CHRW Radio - Room 250 UCC - On-Air Studio'
    }
    this.componentWillReceiveProps.bind(this);
    this.handleRegister.bind(this);
  }

  componentWillReceiveProps(){

  }

  handleRegister(){

  }

  render() {
    return(
      <div class="main-container">
        <h1>{this.state.eventTitle}</h1>
        <div class="flex-container">
          <div class="split split-left">
            <div>
              <p>When: {this.state.startTime}</p>
              <p>Location: {this.state.location}</p>
              <p>Spaces Available: {this.state.spacesLeft}</p>
              <p>Spaces Occupied: {this.state.spacesOccupied}</p>
              <Button type="submit">Register!</Button>
            </div>
          </div>
          <div class="split split-right">
            <p> {this.state.eventDescription} </p>
          </div>
        </div>
      </div>
    )
  };

}

export default Event;
