import React from 'react';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

class Section extends React.Component {
  render() {
    let { children, title } = this.props;
    return (
      <div className={s.sectionContainer}>
        <div className={s.title} style={{color: this.props.color}}>
         {title}
        </div>       
        <div className={s.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Section);