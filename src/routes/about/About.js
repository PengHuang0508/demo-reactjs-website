import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./About.css";
import Page from "../../components/Page";
import Photo from "../../components/Photo";
import Section from "../../components/Section";
import Team from "../../components/Team";
import Gallery from "../../components/Gallery";

class About extends React.Component {
  render() {
    const summary = {
      id: "about",
      title: "Hospital of Animal Kingdom",
      icon: "icons/logo.png",
    };

    const team = {
      owl: {
        id: "owl",
        name: "Dr.Owl",
        portrait: "img/portrait/owl.jpg",
        position: "Veterinary",
        education:
          "Veterinary College in South China & Western College of Veterinary Medicine",
      },
      gorilla: {
        id: "gorilla",
        name: "Gorilla",
        portrait: "img/portrait/gorilla.jpg",
        position: "Animal Health Technologist",
        education: "Red River Community College",
      },
      rabbit: {
        id: "rabbit",
        name: "Rabbit",
        portrait: "img/portrait/rabbit.jpg",
        position: "Veterinary Assistant",
        education: "Robertson College",
      },
      panda: {
        id: "panda",
        name: "Panda",
        portrait: "img/portrait/panda.jpg",
        position: "Veterinary Assistant",
        education: "Robertson College",
      },
    };

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Section>
            <Page {...summary} />
          </Section>
          <Photo />
          <Section>
            <Team {...team["owl"]} />
            <Team {...team["gorilla"]} />
          </Section>
          <Section>
            <Team {...team["rabbit"]} />
            <Team {...team["panda"]} />
          </Section>
          <Section title={"Gallery"}>
            <Gallery />
          </Section>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
