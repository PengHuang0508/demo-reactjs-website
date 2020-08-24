import React from "react";
import ReactDOM from "react-dom";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./GoogleMaps.css";

class GoogleMaps extends React.Component {
  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.maps);
    element.setAttribute("frameborder", "0");
    element.setAttribute("allowfullscreen", "");
  }

  render() {
    const mapSrc =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726540.320924732!2d33.701553634478906!3d-0.7804512860229234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x296a9587e0c3c410!2sMaasai%20Mara%20National%20Reserve!5e0!3m2!1sen!2sca!4v1598304711671!5m2!1sen!2sca";
    return <iframe className={s.maps} ref="maps" src={mapSrc}></iframe>;
  }
}

export default withStyles(s)(GoogleMaps);
