import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Header.css";
import Navigation from "../Navigation";
import NavigationSidebar from "../NavigationSidebar";
import Banner from "../Banner";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "1024",
      height: "768",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // Add event listener
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Remove even listener
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  // Calculate & update state of new dimensions
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  switchNavi(path) {
    let { width } = this.state;

    if (width >= "992") {
      return <Navigation path={path} />;
    } else {
      return <NavigationSidebar />;
    }
  }

  render() {
    let { path } = this.props;

    return (
      <div className={s.container}>
        {this.switchNavi(path)}
        <Banner path={path} />
      </div>
    );
  }
}

export default withStyles(s)(Header);
