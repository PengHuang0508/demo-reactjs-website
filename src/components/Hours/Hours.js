import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Hours.css";

const messages = defineMessages({
  monday: {
    id: "hrs.mon",
    defaultMessage: "Monday",
  },
  tuesday: {
    id: "hrs.tue",
    defaultMessage: "Tuesday",
  },
  wednesday: {
    id: "hrs.wed",
    defaultMessage: "Wednesday",
  },
  thursday: {
    id: "hrs.thu",
    defaultMessage: "Thursday",
  },
  friday: {
    id: "hrs.fri",
    defaultMessage: "Friday",
  },
  saturday: {
    id: "hrs.sat",
    defaultMessage: "Saturday",
  },
  sunday: {
    id: "hrs.sun",
    defaultMessage: "Sunday",
  },
});

class Hours extends React.Component {
  render() {
    let hours = [
      {
        day: "monday",
        hours: "8:00am - 6:00pm",
      },
      {
        day: "tuesday",
        hours: "8:00am - 6:00pm",
      },
      {
        day: "wednesday",
        hours: "8:00am - 6:00pm",
      },
      {
        day: "thursday",
        hours: "8:00am - 6:00pm",
      },
      {
        day: "friday",
        hours: "8:00am - 6:00pm",
      },
      {
        day: "saturday",
        hours: "10:00am - 5:00pm",
      },
      {
        day: "sunday",
        hours: "Closed",
      },
    ];

    hours = hours.map((h, i) => (
      <div className={s.hour} key={i}>
        <div className={s.day}>
          <FormattedMessage {...messages[h["day"]]} />
        </div>
        <div className={s.hours}> {h.hours} </div>
      </div>
    ));

    return <div className={s.container}> {hours} </div>;
  }
}

export default withStyles(s)(Hours);
