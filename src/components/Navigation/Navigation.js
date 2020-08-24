import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Navigation.css";
import Link from "../Link";
import LanguageSwitcher from "../LanguageSwitcher";

const messages = defineMessages({
  home: {
    id: "navigation.home",
    defaultMessage: "Home",
  },
  about: {
    id: "navigation.about",
    defaultMessage: "About",
  },
  services: {
    id: "navigation.services",
    defaultMessage: "Services",
  },
  resources: {
    id: "navigation.resources",
    defaultMessage: "Resources",
  },
  contact: {
    id: "navigation.contact",
    defaultMessage: "Contact",
  },
  appt: {
    id: "btn.bookAppt",
    defaultMessage: "Book an Appointment",
  },
});

class Navigation extends React.Component {
  render() {
    let { path } = this.props;
    let links = [
      {
        name: "home",
        to: "/",
      },
      {
        name: "about",
        to: "/about",
      },
      {
        name: "services",
        to: "/services",
      },
      {
        name: "resources",
        to: "/resources",
      },

      {
        name: "contact",
        to: "/contact",
      },
    ];

    const currentPathStyles = {
      color: "rgb(100, 200, 25)",
      fontSize: "1.5em",
      fontWeight: "bold",
      letterSpacing: "1pt",
    };

    links = links.map((link) => {
      let { name, to } = link;
      if (path == to) {
        return (
          <Link
            className={s.link}
            key={to}
            to={to}
            selected={to === path}
            style={currentPathStyles}
          >
            <FormattedMessage {...messages[link.name]} />
          </Link>
        );
      } else {
        return (
          <Link className={s.link} key={to} to={to} selected={to === path}>
            <FormattedMessage {...messages[link.name]} />
          </Link>
        );
      }
    });

    return (
      <div className={s.navigationContainer} role="navigation">
        <div className={s.linkContainer}>{links}</div>
        <div className={s.lanSwitcher}>
          <LanguageSwitcher />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
