import React from "react";
import { stack as Menu } from "react-burger-menu";
import LanguageSwitcherMobile from "../LanguageSwitcherMobile";

class NavigationSidebar extends React.Component {
  render() {
    var styles = {
      bmBurgerButton: {
        height: "40px",
        left: "25px",
        position: "fixed",
        top: "25px",
        width: "46px",
      },
      bmBurgerBars: {
        background: "#4287f5",
      },
      bmCrossButton: {
        height: "30px",
        width: "30px",
      },
      bmCross: {
        height: "20px",
        background: "rgb(0, 0, 0)",
      },
      bmMenu: {
        background: "rgba(242, 245, 220, 0.95)",
        fontSize: "1em",
        height: "100vh",
        overflow: "hidden",
        padding: "1em 1em 0",
      },
      bmMorphShape: {
        fill: "rgb(55, 60, 70)",
      },
      bmItemList: {
        color: "rgb(185, 185, 175)",
        padding: "0.8em",
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
      },
    };

    var itemStyle = {
      color: "#373a47",
      fontWeight: "bold",
      letterSpacing: "0.5pt",
      padding: "20px 0",
    };

    var iconStyle = {
      width: "40px",
    };

    const items = [
      <a key="0" href="/" style={itemStyle}>
        <i className="fa fa-home" style={iconStyle} />
        <span>Home</span>
      </a>,
      <a key="1" href="/about" style={itemStyle}>
        <i className="fa fa-hospital" style={iconStyle} />
        <span>About</span>
      </a>,
      <a key="2" href="/services" style={itemStyle}>
        <i className="fa fa-paw" style={iconStyle} />
        <span>Services</span>
      </a>,
      <a key="3" href="/resources" style={itemStyle}>
        <i className="fa fa-file-alt" style={iconStyle} />
        <span>Resources</span>
      </a>,
      <a key="4" href="/contact" style={itemStyle}>
        <i className="fa fa-phone" style={iconStyle} />
        <span>Contact</span>
      </a>,
      <a key="5" style={itemStyle}>
        <i className="fa fa-language" style={iconStyle} />
        <LanguageSwitcherMobile />
      </a>,
    ];

    return <Menu styles={styles}>{items}</Menu>;
  }
}

export default NavigationSidebar;
