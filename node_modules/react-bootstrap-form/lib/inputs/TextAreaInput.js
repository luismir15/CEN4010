'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValidationError = require('../ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAreaInput = function (_React$Component) {
  _inherits(TextAreaInput, _React$Component);

  function TextAreaInput(props) {
    _classCallCheck(this, TextAreaInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextAreaInput).call(this, props));

    _this.state = {
      value: props.defaultValue || ""
    };
    return _this;
  }

  _createClass(TextAreaInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var defaultValue = _props.defaultValue;
      var onChange = _props.onChange;

      var other = _objectWithoutProperties(_props, ['name', 'defaultValue', 'onChange']);

      return _react2.default.createElement('textarea', _extends({ name: name }, other, {
        value: this.state.value, onChange: this._onChange.bind(this)
      }));
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
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
  }, {
    key: 'getValue',
    value: function getValue() {
      var _this2 = this;

      return new Promise(function (resolve) {
        return resolve(_this2.state.value);
      });
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var _this3 = this;

      var v = value.trim();
      var _props2 = this.props;
      var name = _props2.name;
      var required = _props2.required;
      var minLength = _props2.minLength;
      var maxLength = _props2.maxLength;


      return new Promise(function (resolve, reject) {
        if (required && v.length === 0) {
          throw new _ValidationError2.default(name, "Value is required", _this3);
        }

        if (v.length === 0) {
          resolve();
        }

        if (minLength !== undefined && v.length < minLength) {
          throw new _ValidationError2.default(name, "Value must be at least " + minLength + " characters", _this3);
        }

        if (maxLength !== undefined && v.length > maxLength) {
          throw new _ValidationError2.default(name, "Value must not be more than " + maxLength + " characters", _this3);
        }

        resolve(v);
      });
    }
  }]);

  return TextAreaInput;
}(_react2.default.Component);

exports.default = TextAreaInput;