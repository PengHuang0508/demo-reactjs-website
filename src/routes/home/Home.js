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
import {
  defineMessages,
  FormattedMessage,
  FormattedRelative,
} from "react-intl";
import { graphql, compose } from "react-apollo";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import newsQuery from "./news.graphql";
import s from "./Home.css";

import Section from "../../components/Section";
import BasicInfo from "../../components/BasicInfo";
import Slideshow from "../../components/Slideshow";
import WhyChooseUs from "../../components/WhyChooseUs";
import Team from "../../components/Team";
import Link from "../../components/Link";
import Page from "../../components/Page";
import Photo from "../../components/Photo";
import Review from "../../components/Review";

import NoSSR from "../../components/NoSSR";

const messages = defineMessages({
  btnLearnMore: {
    id: "btn.learnMore",
    defaultMessage: "Learn More",
  },
});

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const team = {
      owl: {
        id: "owlMin",
        name: "Dr.Owl",
        portrait: "img/portrait/owl.jpg",
        position: "Doctor",
        education: "Bird College & College of Bird Medicine",
      },
      gorilla: {
        id: "gorillaMin",
        name: "Gorilla",
        portrait: "img/portrait/gorilla.jpg",
        position: "Technologist",
        education: "Community College",
      },
      rabbit: {
        id: "rabbitMin",
        name: "Rabbit",
        portrait: "img/portrait/rabbit.jpg",
        position: "Doctor Assistant",
        education: "Mammal College",
      },
      panda: {
        id: "pandaMin",
        name: "Panda",
        portrait: "img/portrait/panda.jpg",
        position: "Doctor Assistant",
        education: "Mammal College",
      },
    };

    const aboutUsSummary = {
      id: "aboutMin",
      title: "Hospital of Animal Kingdom",
    };

    const servicesMin = {
      id: "servicesMin",
      title: "Services",
    };

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.basicInfo}>
            <BasicInfo />
          </div>
          <div className={s.slider}>
            <Slideshow />
          </div>
        </div>

        <WhyChooseUs />

        {/* Brief summary of team members, hospital and services */}
        <Section>
          <div className={s.team}>
            <Team {...team["owl"]} />
            <Team {...team["gorilla"]} />
          </div>
          <div className={s.team}>
            <Team {...team["rabbit"]} />
            <Team {...team["panda"]} />
          </div>

          <div className={s.summary}>
            <Page {...aboutUsSummary} />
            <Page {...servicesMin} />
            <Link className={s.btn} to="/services">
              <FormattedMessage {...messages["btnLearnMore"]} />
            </Link>
          </div>
        </Section>

        <Photo />

        <div className={s.container}>
          <div className={s.review}>
            <Review />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s), graphql(newsQuery))(Home);
