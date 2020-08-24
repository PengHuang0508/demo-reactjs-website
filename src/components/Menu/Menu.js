import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Menu.css";
import Link from "../Link";
import LanguageSwitcher from "../LanguageSwitcher";

class Menu extends React.Component {
  render() {
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
      color: "rgb(65, 140, 170)",
    };

    links = links.map((link, i) => {
      let { icon, name, to } = link;
      if (path == to) {
        return (
          <Link
            className={s.link}
            key={to}
            to={to}
            selected={to === path}
            style={currentPathStyles}
          >
            <i className={icon} title={name} />
          </Link>
        );
      } else {
        return (
          <Link className={s.link} key={to} to={to} selected={to === path}>
            <i className={icon} title={name} />
          </Link>
        );
      }
    });

    return (
      <div className={s.root}>
        <span className={s.linkContainer}>{links}</span>
        <span className={s.lanSwitcher}>
          <LanguageSwitcher />
        </span>
      </div>
    );
  }
}

export default withStyles(s)(Menu);
