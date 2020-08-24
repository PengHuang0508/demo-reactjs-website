import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Photo.css";

class Photo extends React.Component {
  render() {
    let photo = [
      {
        src: "img/photo/p1_sm.png",
      },
      {
        src: "img/photo/p2_sm.png",
      },
      {
        src: "img/photo/p3_sm.png",
      },
      {
        src: "img/photo/p4_sm.png",
      },
      {
        src: "img/photo/p5_sm.png",
      },
      {
        src: "img/photo/p6_sm.jpg",
      },
      {
        src: "img/photo/p7_sm.png",
      },
      {
        src: "img/photo/p8_sm.jpg",
      },
    ];

    photo = photo.map((p, i) => {
      return <img className={s.photo} src={p.src} key={i} />;
    });

    return (
      <div className={s.photoContainer}>
        <div className={s.wrapper}>
          {photo[0]}
          {photo[1]}
          {photo[2]}
          {photo[3]}
        </div>
        <div className={s.wrapper}>
          {photo[4]}
          {photo[5]}
          {photo[6]}
          {photo[7]}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Photo);
