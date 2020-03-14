var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ValidationError from '../ValidationError';

class TextAreaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || ""
    };
  }

  render() {
    const { name, defaultValue, onChange, ...other } = this.props;
    return React.createElement('textarea', _extends({ name: name }, other, {
      value: this.state.value, onChange: this._onChange.bind(this)
    }));
  }

  _onChange(e) {
    // Setting the value here first and then performing setState
    // since the connected Input calls getValue to retreive the value
    // during the this.props.onChange method call and the this.state.value
    // is not set during that period
    this.state.value = e.target.value;
    this.setState({
      value: this.state.value
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  getValue() {
    return new Promise(resolve => resolve(this.state.value));
  }

  validate(value) {
    const v = value.trim();
    const { name, required, minLength, maxLength } = this.props;

    return new Promise((resolve, reject) => {
      if (required && v.length === 0) {
        throw new ValidationError(name, "Value is required", this);
      }

      if (v.length === 0) {
        resolve();
      }

      if (minLength !== undefined && v.length < minLength) {
        throw new ValidationError(name, "Value must be at least " + minLength + " characters", this);
      }

      if (maxLength !== undefined && v.length > maxLength) {
        throw new ValidationError(name, "Value must not be more than " + maxLength + " characters", this);
      }

      resolve(v);
    });
  }
}

export default TextAreaInput;