import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Page.css";

const messages = defineMessages({
  about: {
    id: "about.summary",
    defaultMessage:
      "Nature, in the broadest sense, is the natural, physical, or material world or universe. 'Nature' can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.",
  },
  aboutMin: {
    id: "about.summary.min",
    defaultMessage:
      "Nature, in the broadest sense, is the natural, physical, or material world or universe. 'Nature' can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science.",
  },
  services: {
    id: "services.summary",
    defaultMessage:
      "A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories. Specialized hospitals can help reduce health care costs compared to general hospitals. Hospitals are classified as general, specialty, or government depending on the sources of income received.",
  },
  servicesMin: {
    id: "services.summary.min",
    defaultMessage:
      "A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care.",
  },
});

class Page extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { id, title, icon } = this.props;

    return (
      <div className={s.pageContainer}>
        <div className={s.wrapper}>
          <div className={s.title}>
            <h1>{title}</h1>
          </div>
          <div className={s.text}>
            <FormattedMessage {...messages[id]} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Page);
