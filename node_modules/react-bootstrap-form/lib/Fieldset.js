"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fieldset = function Fieldset(props, context) {
  var id = props.id;
  var name = props.name;
  var label = props.label;
  var description = props.description;

  var error = context.form.getError(name);

  return _react2.default.createElement(
    "div",
    { className: "form-group row" + (error ? " has-danger" : "") },
    label && _react2.default.createElement(
      "label",
      { htmlFor: id, className: "col-sm-3 form-control-label" },
      label
    ),
    _react2.default.createElement(
      "div",
      { className: "col-sm-9" + (label === "" ? " col-sm-offset-3" : "") },
      props.children,
      description && _react2.default.createElement(
        "small",
        { className: "text-muted" },
        description
      ),
      typeof error === "string" && _react2.default.createElement(
        "small",
        { className: "text-muted text-help" },
        " ",
        error
      )
    )
  );
};

Fieldset.contextTypes = {
  form: _react2.default.PropTypes.object
};
exports.default = Fieldset;