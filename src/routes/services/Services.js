import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Services.css';
import Page from  '../../components/Page';
import Photo from '../../components/Photo';
import Section from '../../components/Section';
import Team from '../../components/Team';

class Services extends React.Component {
  render() {
    const summary = {
      id: 'services',
      title: "Our Services",
    };

    return (
      <div className={s.root}>
        <Section>
          <Page {...summary}/>
        </Section>
      </div>
    );
  }
}

export default withStyles(s)(Services);