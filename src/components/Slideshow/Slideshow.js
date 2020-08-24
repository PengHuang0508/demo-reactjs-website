import React from "react";
import Slider from "react-slick";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Slideshow.css";
import Slide from "../Slide";

class Slideshow extends React.Component {
  constructor() {
    super();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

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

    var slide1 = {
      bgImg: "img/slider/book_appointment_dog_sm.jpg",
      title: "Book a full physical exam today",
      text:
        "Once a year, you should get check-up.  This will include a full physical exam, and may include teeth and gum cleaning if needed.",
      btnText: "Book an Appointment",
      to: "/contact",
    };

    var slide2 = {
      bgImg: "img/slider/grooming_dog_sm.jpg",
      title: "In for a fabulous haircut",
      text:
        "Everyday is a salon day! We'll style. You'll smile. All animals are welcome (except for snakes).",
      btnText: "Book a Haircut",
      to: "/contact",
    };

    return (
      <div className={s.container}>
        <button className={s.button} onClick={this.previous}>
          <i className="fa fa-chevron-left fa-2x" />
        </button>

        <div className={s.slider}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div>
              <Slide
                bgImg={slide1.bgImg}
                title={slide1.title}
                text={slide1.text}
                btnText={slide1.btnText}
                to={slide1.to}
              />
            </div>
            <div>
              <Slide
                bgImg={slide2.bgImg}
                title={slide2.title}
                text={slide2.text}
                btnText={slide2.btnText}
                to={slide2.to}
              />
            </div>
          </Slider>
        </div>

        <button className={s.button} onClick={this.next}>
          <i className="fa fa-chevron-right fa-2x" />
        </button>

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

export default withStyles(s)(Slideshow);
