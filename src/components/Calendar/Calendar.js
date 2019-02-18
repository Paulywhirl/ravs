import React, {Component} from "react";
import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./Calendar.scss"

import Event from "./Event.js"

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: events,
      date: new Date()
    }
    this.handleSelectEvent.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
    });
  }

  handleSelectEvent(event) {
    console.log("hello whirl")
  }

  render() {
    return (
      <div class="nav-calendar" style={{height:600}}>
        <BigCalendar
          selectable
          localizer={localizer}
          style={{ height: 550, width: 1000}}
          events={this.state.events}
          step={60}
          defaultDate={moment().toDate()}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(event) => this.handleSelectEvent(event)}
        />
      </div>
  );
}

}

export default Calendar;
