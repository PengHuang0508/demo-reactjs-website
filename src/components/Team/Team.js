import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Team.css";

const messages = defineMessages({
  owl: {
    id: "about.owl",
    defaultMessage:
      "Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight. Exceptions include the diurnal northern hawk-owl and the gregarious burrowing owl.",
  },
  owlMin: {
    id: "home.owl.min",
    defaultMessage:
      "Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.",
  },
  gorilla: {
    id: "about.gorilla",
    defaultMessage:
      "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forest of central Sub-Saharan Africa. The genus Gorilla is divided into two species: the eastern gorillas and the western gorillas (both critically endangered), and either four or five subspecies. They are the largest living primates.",
  },
  gorillaMin: {
    id: "home.gorilla.min",
    defaultMessage:
      "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forest of central Sub-Saharan Africa. The genus Gorilla is divided into two species: the eastern gorillas and the western gorillas (both critically endangered), and either four or five subspecies. They are the largest living primates.",
  },
  rabbit: {
    id: "about.rabbit",
    defaultMessage:
      "Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the seven types of cottontail.",
  },
  rabbitMin: {
    id: "home.rabbit.min",
    defaultMessage:
      "The giant panda, also known as the panda bear or simply the panda, is a bear native to south central China. It is characterised by large, black patches around its eyes, over the ears, and across its round body.",
  },
  panda: {
    id: "about.panda",
    defaultMessage:
      "The giant panda, also known as the panda bear or simply the panda, is a bear native to south central China. It is characterised by large, black patches around its eyes, over the ears, and across its round body.",
  },
  pandaMin: {
    id: "home.panda.min",
    defaultMessage:
      "The giant panda, also known as the panda bear or simply the panda, is a bear native to south central China. It is characterised by large, black patches around its eyes, over the ears, and across its round body.",
  },
});

class Team extends React.Component {
  render() {
    const { id, name, portrait, position, education } = this.props;

    return (
      <div className={s.teamContainer}>
        <div className={s.wrapper}>
          <div className={s.nameTag}>
            <img className={s.portrait} src={portrait} alt={name} />
            <div className={s.info}>
              <p className={s.name}>{name}</p>
              <p className={s.position}>{position}</p>
              <p className={s.edu}>{education}</p>
            </div>
          </div>
          <div className={s.text}>
            <FormattedMessage {...messages[id]} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Team);
