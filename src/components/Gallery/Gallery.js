import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Gallery.css";

import Lightbox from "react-image-lightbox";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const images = [
      {
        src: "img/photo/nature/nature-1.jpg",
        alt: "Animal Hospital Hospital",
        cap: "",
      },
      {
        src: "img/photo/nature/nature-1.jpg",
        alt: "Animal Hospital Hospital",
        cap: "",
      },
      {
        src: "img/photo/nature/nature-1.jpg",
        alt: "Animal Hospital Hospital",
        cap: "",
      },
      {
        src: "img/photo/nature/nature-1.jpg",
        alt: "Animal Hospital Hospital",
        cap: "",
      },
      {
        src: "img/photo/nature/nature-1.jpg",
        alt: "Animal Hospital Hospital",
        cap: "",
      },
    ];

    let imageThumbnail = [
      "img/photo/nature/nature-1.jpg",
      "img/photo/nature/nature-2.jpg",
      "img/photo/nature/nature-3.jpg",
      "img/photo/nature/nature-4.jpg",
      "img/photo/nature/nature-5.jpg",
    ];

    imageThumbnail = imageThumbnail.map((p, i) => {
      return (
        <img
          className={s.photo}
          src={p}
          key={i}
          onClick={() => this.setState({ isOpen: true, photoIndex: i })}
        />
      );
    });

    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className={s.gallery}>{imageThumbnail}</div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageTitle={images[photoIndex].alt}
            imageCaption={images[photoIndex].cap}
            imagePadding={70}
          />
        )}
      </div>
    );
  }
}

export default withStyles(s)(Gallery);
