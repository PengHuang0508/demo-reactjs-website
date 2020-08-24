import React, { PropTypes } from 'react';

declare var __BROWSER__: boolean;

function renderValue(value) {
  let result = value;
  if (typeof result === 'function') {
    result = result();
  }
  if (typeof result === 'string') {
    result = <span>{result}</span>;
  }
  return result;
}

export default class NoSSR extends React.Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    onSSR: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  static defaultProps = {
    children: null,
    onSSR: null,
  };

  state = {
    canRender: __BROWSER__ && window.RSK_MOUNTED,
  };

  componentDidMount() {
    const { canRender } = this.state;
    if (canRender) return;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ canRender: true });
  }

  render() {
    const { children, onSSR } = this.props;
    const { canRender } = this.state;
    return canRender ? renderValue(children) : renderValue(onSSR);
  }
}