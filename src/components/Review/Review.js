import React from "react";
import Slider from "react-slick";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Review.css";
import Comment from "../Comment";

class Review extends React.Component {
  render() {
    var settings = {
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3500,
      className: true,
      dots: true,
      infinite: true,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };

    var comment1 = {
      comment:
        "Hospital of Animal Kingdom is exactly what our community has been lacking. Thanks guys, keep up the good work! Hospital of Animal Kingdom did exactly what you said it does. Not able to tell you how happy with Hospital of Animal Kingdom",
      name: "Lion",
    };

    var comment2 = {
      comment:
        "We're loving it. Hospital of Animal Kingdom is great. I'd be lost without Hospital of Animal Kingdom",
      name: "Meerkat",
    };

    var comment3 = {
      comment:
        "It's incredible. We can't understand how we've been living without Hospital of Animal Kingdom.",
      name: "Warthog",
    };

    return (
      <div className={s.reviewContainer}>
        <Slider {...settings}>
          <div>
            <Comment comment={comment1.comment} name={comment1.name} />
          </div>
          <div>
            <Comment comment={comment2.comment} name={comment2.name} />
          </div>
          <div>
            <Comment comment={comment3.comment} name={comment3.name} />
          </div>
        </Slider>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </div>
    );
  }
}

export default withStyles(s)(Review);
