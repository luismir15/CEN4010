'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props, context) {
  var name = props.name;
  var type = props.type;
  var label = props.label;
  var description = props.description;
  var prefix = props.prefix;
  var suffix = props.suffix;

  console.log("Form Input Hook is ", _Form2.default.InputHook);
  var Input = _Form2.default.InputHook && _Form2.default.InputHook(type) || _Form2.default.Inputs[type] || _Form2.default.DefaultInput;
  var error = context.form.getError(name);

  var inputElement = _react2.default.createElement(Input, _extends({ className: "form-control" + (error ? " form-control-danger" : "") }, props));

  // Attach a prefix or suffix if its provided
  if (prefix || suffix) {
    inputElement = _react2.default.createElement(
      'div',
      { className: 'input-group' },
      prefix && _react2.default.createElement(
        'div',
        { className: 'input-group-addon' },
        prefix
      ),
      inputElement,
      suffix && _react2.default.createElement(
        'div',
        { className: 'input-group-addon' },
        suffix
      )
    );
  }

  // If there's a label or description create a form group and put it there
  if (label || description) {
    return _react2.default.createElement(
      _Form2.default.Fieldset,
      { name: name, label: label, description: description },
      inputElement
    );
  }
  return inputElement;
};

Input.contextTypes = {
  form: _react2.default.PropTypes.object
};

exports.default = Input;