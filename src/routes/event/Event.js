import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Event.css';
import Section from '../../components/Section';

class Event extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Section title="Upcoming Event"></Section>
        <Section title="All Event">
          <div>
            <h3>Nov 1 Spay Day</h3>
          </div>

        </Section>
      </div>
    );
  }
}
export default withStyles(s)(Event);