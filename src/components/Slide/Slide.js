import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Slide.css';
import Link from '../Link';

class Slide extends React.Component {
  render() {
    let { bgImg, title, text, btnText, to } = this.props;

    return (
      <div className={s.container} style={{backgroundImage: 'url('+ this.props.bgImg+')'}}>
        <div className={s.dialogue}>
          <div className={s.title}>
            {title}
          </div>
          <div className={s.text}>
            {text}  
          </div>
          <Link className={s.button} to={to}>
            {btnText}
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Slide);