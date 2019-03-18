import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.scss"

import moment from "moment";

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [props.events],
      contact: props.contact,
      date: new Date(),
      focus_event: {},
      redirect:false
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
      this.setState({
        focus_event: event,
        redirect: true
      })
  }

  render() {
    if(this.state.redirect) {
      return <Redirect push to={{ pathname:"/calendar/session/" + this.state.focus_event.eventId,
                                  state: { event: this.state.focus_event, contact: this.state.contact}
                                }}/>
    }
    return (
      <div className="nav-calendar" style={{height:600}}>
        <BigCalendar
          selectable
          localizer={localizer}
          style={{ height: 550, width: 1000}}
          events={this.state.events[0]}
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
