import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./BasicInfo.css";
import Hours from "../Hours";
import InfoItem from "../InfoItem";

class BasicInfo extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.contact}>
          <div className={s.info}>
            <InfoItem
              color="#273e79"
              icon={<i className="fa fa-clock-o fa-lg" />}
              title="hoursTitle"
            >
              <Hours />
            </InfoItem>
          </div>

          <div className={s.info}>
            <InfoItem
              color="#1a6214"
              icon={<i className="fa fa-hospital-o fa-lg" />}
              title="locationTitle"
            >
              <div>123 Main Street</div>
              <div>Animal Kingdom</div>
              <div>
                Reception:{" "}
                <a href="tel:123456789" style={{ color: "#1a6214" }}>
                  (123) 456-7890
                </a>
              </div>
              <div>
                Dr. Owl:{" "}
                <a href="tel:3216540987" style={{ color: "#1a6214" }}>
                  (321) 654-0987
                </a>
              </div>
            </InfoItem>
          </div>
        </div>

        <div className={s.emergency}>
          <InfoItem
            color="#8a3244"
            icon={<i className="fa fa-plus-circle fa-lg" />}
            title="emergencyTitle"
          ></InfoItem>

          <div className={s.title}>Safari Hospital and Wellness Center</div>
          <InfoItem color="#560a25">
            <div>123 Safari Zone</div>
            <a href="tel:12044529427">(111) 222-333</a>
          </InfoItem>

          <div className={s.title2}>Nile Emergency</div>
          <InfoItem color="#560a25">
            <div>100 Nile River</div>
            <a href="https://en.wikipedia.org/wiki/Nile">
              en.wikipedia.org/wiki/Nile
            </a>
          </InfoItem>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BasicInfo);
