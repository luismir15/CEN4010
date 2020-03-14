import React from 'react';
import ValidationError from '../ValidationError';

class RadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || undefined
    };
  }

  getValue() {
    const v = this.state.value;
    return new Promise(resolve => {
      resolve(v);
    });
  }

  validate(value) {
    const { name, required } = this.props;
    return new Promise((resolve, reject) => {
      if (required && value === undefined) {
        throw new ValidationError(name, "One of the option needs to be selected");
      }

      resolve(value);
    });
  }

  _onChange(e) {
    this.state.value = e.target.value;
    this.setState({
      value: this.state.value
    });

    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const { options, name, optionClass } = this.props;
    let values, texts;
    if (options instanceof Array) {
      values = texts = options;
    } else if (typeof options === "object") {
      values = Object.keys(options);
      texts = values.map(key => options[key]);
    } else {
      values = texts = [];
    }

    return React.createElement(
      'div',
      null,
      texts.map((text, index) => React.createElement(
        'div',
        { className: optionClass || "radio", key: values[index] },
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: name, value: values[index],
            onChange: this._onChange.bind(this),
            checked: values[index] === this.state.value }),
          text
        )
      ))
    );
  }
}

export default RadioInput;