import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./WhyChooseUs.css";

const messages = defineMessages({
  reason1: {
    id: "whyChooseUs1",
    defaultMessage:
      "Ea Lorem qui do tempor. Pariatur cillum cupidatat ullamco sunt cillum aute. Voluptate sit commodo eiusmod do et velit sit veniam nulla ex sit laboris fugiat.Cupidatat do proident mollit amet voluptate ad velit. Aute fugiat reprehenderit ex occaecat occaecat ut nisi quis quis dolor in. Laboris eu aute id magna aute tempor ipsum minim et mollit voluptate enim.",
  },
  reason2: {
    id: "whyChooseUs2",
    defaultMessage:
      "Aute qui cupidatat deserunt sunt incididunt reprehenderit voluptate in dolor irure. Ullamco excepteur mollit enim deserunt laborum ea cillum cillum. Tempor occaecat laboris incididunt esse ex culpa reprehenderit. Sint sunt dolor mollit incididunt id enim nisi excepteur ex irure ex ex reprehenderit. Sit quis culpa ullamco officia fugiat minim et enim esse.Incididunt est eiusmod in cupidatat do. Cillum velit sint laborum do laboris ut culpa proident et. Nostrud magna veniam nulla esse. Aliquip nostrud fugiat fugiat magna.",
  },
  reason3: {
    id: "whyChooseUs3",
    defaultMessage:
      "Deserunt adipisicing do sunt labore ut proident esse duis id enim exercitation voluptate. Adipisicing cillum qui irure laboris sit aliquip nostrud quis excepteur proident esse quis. Dolore dolore laboris eiusmod sit aute aute quis. Sunt culpa excepteur ipsum aute in in id dolore ad.Sunt culpa ipsum deserunt do enim ex occaecat ad occaecat commodo ex sint enim ut. Velit ad pariatur reprehenderit enim fugiat consequat quis in. Culpa ex deserunt id occaecat magna amet magna. Do esse do proident ea fugiat esse veniam aliqua ad do sint.",
  },
  reason4: {
    id: "whyChooseUs4",
    defaultMessage:
      "Sunt officia ad nisi veniam dolore nulla esse magna ullamco culpa elit incididunt in consequat. Exercitation reprehenderit laborum quis tempor Lorem eu. Et et commodo qui et aliquip. Tempor elit ex dolor consectetur incididunt.Tempor adipisicing exercitation laborum minim. Non occaecat ipsum ipsum deserunt ut non sunt laborum in sit. Lorem commodo voluptate ad excepteur consequat nostrud consequat ipsum amet consectetur eu duis nisi.",
  },
});

class WhyChooseUs extends React.Component {
  render() {
    const data = [
      {
        color: "#222d42",
        title: "Routine Services",
        text: "reason1",
      },
      {
        color: "#60411f",
        font: "2em",
        title: "State-of-Art",
        text: "reason2",
      },
      {
        color: "#5b1e36",
        title: "Unique Services",
        text: "reason3",
      },
      {
        color: "#345640",
        title: "We Care",
        text: "reason4",
      },
    ];

    let content = data.map((d, i) => (
      <div className={s.contentWrapper} key={i}>
        <div className={s.title} style={{ color: d.color }}>
          {d.title}
        </div>
        <div className={s.text}>
          <FormattedMessage {...messages[d.text]} />
        </div>
      </div>
    ));

    return (
      <div className={s.container}>
        <fieldset>
          <legend>Why Choose Us</legend>
          <div className={s.contentContainer}>{content}</div>
        </fieldset>
      </div>
    );
  }
}

export default withStyles(s)(WhyChooseUs);
