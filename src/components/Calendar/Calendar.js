import React, {Component} from "react";
import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./Calendar.scss"

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  state = {
    date: new Date(2019, 1, 10)
  }

  componentDidMount() {
      window.addEventListener("resize", () => {
        /*this.setState({
          width: window.innerWidth,
          height: window.innerHeight
        });*/
      });
    }

  render() {
    return (
      <div class="calendar" style={{height:600}}>
        <BigCalendar
          localizer={localizer}
          style={{ height: 550, width: 1200}}
          events={events}
          step={60}
          defaultDate={moment().toDate()}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
  );
}

}

export default Calendar;
