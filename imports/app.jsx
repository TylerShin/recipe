import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class App extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        { children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
