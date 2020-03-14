var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Form from './Form';

const Input = (props, context) => {
  const { name, type, label, description, prefix, suffix } = props;
  console.log("Form Input Hook is ", Form.InputHook);
  const Input = Form.InputHook && Form.InputHook(type) || Form.Inputs[type] || Form.DefaultInput;
  const error = context.form.getError(name);

  let inputElement = React.createElement(Input, _extends({ className: "form-control" + (error ? " form-control-danger" : "") }, props));

  // Attach a prefix or suffix if its provided
  if (prefix || suffix) {
    inputElement = React.createElement(
      'div',
      { className: 'input-group' },
      prefix && React.createElement(
        'div',
        { className: 'input-group-addon' },
        prefix
      ),
      inputElement,
      suffix && React.createElement(
        'div',
        { className: 'input-group-addon' },
        suffix
      )
    );
  }

  // If there's a label or description create a form group and put it there
  if (label || description) {
    return React.createElement(
      Form.Fieldset,
      { name: name, label: label, description: description },
      inputElement
    );
  }
  return inputElement;
};

Input.contextTypes = {
  form: React.PropTypes.object
};

export default Input;