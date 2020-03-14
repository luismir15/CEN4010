var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import TextInput from './TextInput';

class DeferredInput extends React.Component {
  render() {
    return React.createElement(TextInput, _extends({ ref: 'inp' }, this.props));
  }

  getValue() {
    return this.refs.inp.getValue();
  }

  validate(value) {
    console.log("Deferring input validation for 1 second", value);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Validating Deferred Input after 1 second", value);
        resolve(this.refs.inp.validate(value));
      }, 1000);
    });
  }

}

export default DeferredInput;