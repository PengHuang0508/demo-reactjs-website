import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Footer.css";
import Link from "../Link";
import Section from "../Section";

class Footer extends React.Component {
  render() {
    return (
      <div className={s.footerContainer}>
        <Section title="Stay Connected" color="#ddd">
          <div className={s.container}>
            <div className={s.title}>Visit us</div>
            <div className={s.text}>
              <i className="fa fa-location-arrow fa-lg" /> 123 Main Street
              <br />
              Animal Kingdom
              <br />
              <i className="fa fa-phone fa-lg" />{" "}
              <a className={s.link} href="tel:1234567890">
                (123) 456-7890
              </a>
            </div>
          </div>

          <div className={s.container}>
            <div className={s.title}>Follow us</div>
            <div className={s.text}>
              <div className={s.socialMedia}>
                <a
                  className={s.socialMedia}
                  href="https://www.facebook.com/discoverycanada"
                >
                  <i className="fab fa-facebook-square fa-2x" />
                </a>
                <span className={s.spacerLg}></span>
                <a
                  className={s.socialMedia}
                  href="http://plus.google.com/+discoverycanada"
                >
                  <i className="fab fa-google-plus-square fa-2x" />
                </a>
                <span className={s.spacerLg}></span>
                <a
                  className={s.socialMedia}
                  href="https://twitter.com/discoverycanada"
                >
                  <i className="fab fa-twitter-square fa-2x" />
                </a>
              </div>
              <div className={s.textSm}>
                We share tips and news.
                <br />
                We also upload photos!
              </div>
            </div>
          </div>

          <div className={s.container}>
            <div className={s.title}>Ask us</div>
            <div className={s.text}>
              <div>
                <i className="fa fa-envelope fa-2x" />
              </div>
              <div className={s.email}>
                <a href=""> reception@hofak.com</a>
              </div>
              <div className={s.textSm}>
                If you have any concerns or questions,
                <br />
                we are here to help!
                <br />
              </div>
            </div>
          </div>
        </Section>

        <div className={s.footnoteContainer}>
          <Link className={s.footnote} to="/">
            © Hospital of Animal Kingdom
          </Link>
          <span className={s.spacer}>·</span>
          <Link className={s.footnote} to="">
            Back to Top
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
