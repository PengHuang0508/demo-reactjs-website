import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./InfoItem.css";

const messages = defineMessages({
  hoursTitle: {
    id: "hrs.title",
    defaultMessage: "Office Hours",
  },
  locationTitle: {
    id: "location.title",
    defaultMessage: "Location",
  },
  emergencyTitle: {
    id: "emergency.title",
    defaultMessage: "24 Hour Emergency & Critical Care",
  },
});

class InfoItem extends React.Component {
  render() {
    let { children, color, icon, style, title } = this.props;

    if (children) {
      children = React.Children.map(this.props.children, (c) => {
        return React.cloneElement(c, { className: s.child, style: { color } });
      });
    }

    switch (title == null) {
      case false:
        return (
          <div className={s.container} style={this.props.style}>
            <div className={s.header}>
              <div style={{ color: this.props.color }}>{this.props.icon}</div>
              <div className={s.title} style={{ color: this.props.color }}>
                <FormattedMessage {...messages[title]} />
              </div>
            </div>
            {children ? children : null}
          </div>
        );
      case true:
        return (
          <div className={s.container} style={this.props.style}>
            <div className={s.header}>
              <div style={{ color: this.props.color }}>{this.props.icon}</div>
            </div>
            {children}
          </div>
        );
    }
  }
}

export default withStyles(s)(InfoItem);
