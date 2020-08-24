import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Banner.css";

const messages = defineMessages({
  home: {
    id: "title.home",
    defaultMessage: "Hospital of Animal Kingdom",
  },
  about: {
    id: "title.about",
    defaultMessage: "About us",
  },
  services: {
    id: "title.services",
    defaultMessage: "Services",
  },
  resources: {
    id: "title.resources",
    defaultMessage: "Resources",
  },
  contact: {
    id: "title.contact",
    defaultMessage: "Contact",
  },
});

const backgroundStyles = {
  home: {
    backgroundImage: "url('img/header/home.png')",
    backgroundPosition: "center 70%",
    minHeight: "500",
  },
  about: {
    backgroundImage: "url('img/header/about.png')",
    backgroundPosition: "center 60%",
  },
  services: {
    backgroundImage: "url('img/header/services.png')",
  },
  resources: {
    backgroundImage: "url('img/header/resources.jpg')",
    backgroundPosition: "center 20%",
  },
  contact: {
    backgroundImage: "url('img/header/contact.png')",
    backgroundPosition: "center",
  },
  notFound: {
    backgroundImage: "url('img/header/notFound.jpg')",
    backgroundPosition: "center 55%",
  },
};

class Banner extends React.Component {
  switchStyle(path) {
    switch (path) {
      case "/":
        return (
          <div className={s.banner} style={backgroundStyles["home"]}>
            <div className={s.homeTitle}>
              <img src="img/header/logo.png" className={s.logo} />
              <FormattedMessage {...messages["home"]} />
            </div>
            <div className={s.homeSubtitle}>
              Known for our expertise. Chosen for our care.
            </div>
          </div>
        );
      case "/about":
        return (
          <div className={s.banner} style={backgroundStyles["about"]}>
            <div className={s.bannerTitle}>
              <FormattedMessage {...messages["about"]} />
            </div>
          </div>
        );
      case "/resources":
        return (
          <div className={s.banner} style={backgroundStyles["resources"]}>
            <div className={s.bannerTitle}>
              <FormattedMessage {...messages["resources"]} />
            </div>
          </div>
        );
      case "/services":
        return (
          <div className={s.banner} style={backgroundStyles["services"]}>
            <div className={s.bannerTitle}>
              <FormattedMessage {...messages["services"]} />
            </div>
          </div>
        );
      case "/contact":
        return (
          <div className={s.banner} style={backgroundStyles["contact"]}>
            <div className={s.bannerTitle}>
              <FormattedMessage {...messages["contact"]} />
            </div>
          </div>
        );
      default:
        return (
          <div className={s.banner} style={backgroundStyles["notFound"]}>
            <div className={s.bannerTitle}>Error</div>
            <p className={s.bannerDesc} style={{ color: "white" }}>
              Oops! Something went wrong.
            </p>
          </div>
        );
    }
  }

  render() {
    let { path } = this.props;
    return <div className={s.container}>{this.switchStyle(path)}</div>;
  }
}

export default withStyles(s)(Banner);
