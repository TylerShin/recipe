import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
// import components
import RacipeForm from '../components/racipe/racipeForm';

export default class RacipeFormContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="racipe-form-container">
        <RacipeForm />
      </div>
    );
  }
}
