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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeferredInput = function (_React$Component) {
  _inherits(DeferredInput, _React$Component);

  function DeferredInput() {
    _classCallCheck(this, DeferredInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DeferredInput).apply(this, arguments));
  }

  _createClass(DeferredInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TextInput2.default, _extends({ ref: 'inp' }, this.props));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.inp.getValue();
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var _this2 = this;

      console.log("Deferring input validation for 1 second", value);
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log("Validating Deferred Input after 1 second", value);
          resolve(_this2.refs.inp.validate(value));
        }, 1000);
      });
    }
  }]);

  return DeferredInput;
}(_react2.default.Component);

exports.default = DeferredInput;