'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _ValidationError = require('../ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegerInput = function (_React$Component) {
  _inherits(IntegerInput, _React$Component);

  function IntegerInput() {
    _classCallCheck(this, IntegerInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IntegerInput).apply(this, arguments));
  }

  _createClass(IntegerInput, [{
    key: 'getValue',
    value: function getValue() {
      return this.refs.inp.getValue();
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var _this2 = this;

      var _props = this.props;
      var name = _props.name;
      var min = _props.min;
      var max = _props.max;

      return this.refs.inp.validate(value).then(function (v) {
        if (v === undefined) {
          return;
        }

        v = parseInt(value, 10);
        if (isNaN(v)) {
          throw new _ValidationError2.default(name, "Input must be a numeric integer", _this2);
        }

        if (max !== undefined && v > max) {
          throw new _ValidationError2.default(name, "Input must be less than " + _this2.props.max, _this2);
        }

        if (min !== undefined && v < min) {
          throw new _ValidationError2.default(name, "Input must be greater than " + _this2.props.min, _this2);
        }

        return v;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TextInput2.default, _extends({ ref: 'inp' }, this.props));
    }
  }]);

  return IntegerInput;
}(_react2.default.Component);

exports.default = IntegerInput;