import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Comment.css';

class Comment extends React.Component {
  render() {
    const { comment, name } = this.props;

    return (
      <div className={s.commentContainer}>
        <div className={s.quoteUpper}>
          <i className='fa fa-quote-left fa-lg'/>
        </div>
        <div className={s.text}>{comment}</div>
        <div className={s.quoteLower}>
          <i className='fa fa-quote-right fa-lg'/>
        </div>
        
        <div className={s.name}>- {name}</div>
        
      </div>

    );
  }
}

export default withStyles(s)(Comment);