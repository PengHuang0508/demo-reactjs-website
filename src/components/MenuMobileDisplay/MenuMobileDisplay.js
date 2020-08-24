import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./MenuMobileDisplay.css";
import Link from "../Link";
import LanguageSwitcherMobile from "../LanguageSwitcherMobile";

class MenuMobileDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  navToggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    // Accordion menu has 2 states, active and inactive. When active, navigation is shown, vice versa.
    const menuBtn = {
      active: {
        background: "rgb(10, 125, 125)",
      },
      inactive: {
        background: "rgb(25, 150, 175)",
      },
    };

    const nav = {
      active: {
        height: "60vh",
      },
      inactive: {
        height: "0",
      },
    };

    // Check the nav's state
    const navCheck = this.state.active ? nav.active : nav.inactive;
    const menuCheck = this.state.active ? menuBtn.active : menuBtn.inactive;

    let { path } = this.props;
    let links = [
      {
        name: "Home",
        icon: "fa fa-home fa-lg",
        to: "/",
      },
      {
        name: "About",
        icon: "fa fa-group fa-lg",
        to: "/about",
      },
      {
        name: "Services",
        icon: "fa fa-newspaper-o fa-lg",
        to: "/services",
      },
      {
        name: "Contact",
        icon: "fa fa-phone fa-lg",
        to: "/contact",
      },
    ];
    const currentPathStyles = {
      color: "rgb(70, 200, 255)",
    };

    links = links.map((link, i) => {
      let { name, icon, to } = link;
      if (path == to) {
        return (
          <Link
            className={s.linkBtn}
            key={to}
            selected={to === path}
            title={name}
            to={to}
          >
            <i className={icon} style={currentPathStyles}></i>
          </Link>
        );
      } else {
        return (
          <Link
            className={s.linkBtn}
            key={to}
            selected={to === path}
            title={name}
            to={to}
          >
            <i className={icon}></i>
          </Link>
        );
      }
    });

    return (
      <div className={s.container}>
        <div className={s.menuContainer}>
          <button
            className={s.menuButton}
            title="Menu"
            onClick={this.navToggle.bind(this)}
            style={menuCheck}
          >
            <i className="fa fa-list fa-lg" />
          </button>
          <div className={s.nav} style={navCheck}>
            {links}
            <div className={s.linkBtn}>
              <LanguageSwitcherMobile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MenuMobileDisplay);
