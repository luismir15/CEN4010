var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ValidationError from '../ValidationError';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || ""
    };
  }

  render() {
    const { name, defaultValue, onChange, options, ...other } = this.props;
    return React.createElement(
      'select',
      _extends({ name: name }, other, { onChange: this._onChange.bind(this), value: this.state.value }),
      Object.keys(options).map(key => React.createElement(
        'option',
        { key: key, value: key },
        options[key]
      ))
    );
  }

  _onChange(e) {
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
    const { name, required } = this.props;
    return new Promise((resolve, reject) => {
      if (required && v.length == 0) {
        throw new ValidationError(name, "Value is required", this);
      }

      resolve(v.length == 0 ? undefined : v);
    });
  }
}

export default SelectInput;