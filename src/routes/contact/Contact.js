/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Contact.css";
import InfoItem from "../../components/InfoItem";
import Hours from "../../components/Hours";
import Section from "../../components/Section";
import GoogleMaps from "../../components/GoogleMaps";
import Photo from "../../components/Photo";
import BookAppointment from "../../components/BookAppointment";

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.emergency}>
            <div className={s.infoTitle}>
              <i className="fa fa-plus-circle fa-lg" />
              <span className={s.spacer}></span>
              <span>24 Hour Emergency Contact</span>
            </div>

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

          <div className={s.contact}>
            <div className={s.info}>
              <InfoItem
                color="#273e79"
                icon={<i className="fa fa-clock-o fa-lg" />}
                title="hoursTitle"
              >
                <div>
                  <Hours />
                </div>
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
                  <a href="tel:1234567890" style={{ color: "#1a6214" }}>
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
        </div>

        <GoogleMaps />
      </div>
    );
  }
}

export default withStyles(s)(Contact);
