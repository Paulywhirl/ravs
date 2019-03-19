import React, {Component} from "react";
import { Button } from 'reactstrap';
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
      progress: JSON.parse(props.progress),
      focus_event: {},
      redirect: false
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
      var trained = this.state.progress.session_progression.training.completed
      return <Redirect
      push to={{ pathname:"/calendar/session/" + this.state.focus_event.eventId,
            state: { event: this.state.focus_event, contact: this.state.contact,
                     trained: trained}
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
          startAccessor={(event) => new Date(event.start)}
          endAccessor={(event) => new Date(event.end)}
          onSelectEvent={(event) => this.handleSelectEvent(event)}
        />
        <div>
          <Button>Refresh</Button>
        </div>
      </div>
  );
}

}

export default Calendar;
