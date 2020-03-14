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

var SelectInput = function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput(props) {
    _classCallCheck(this, SelectInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectInput).call(this, props));

    _this.state = {
      value: props.defaultValue || ""
    };
    return _this;
  }

  _createClass(SelectInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var defaultValue = _props.defaultValue;
      var onChange = _props.onChange;
      var options = _props.options;

      var other = _objectWithoutProperties(_props, ['name', 'defaultValue', 'onChange', 'options']);

      return _react2.default.createElement(
        'select',
        _extends({ name: name }, other, { onChange: this._onChange.bind(this), value: this.state.value }),
        Object.keys(options).map(function (key) {
          return _react2.default.createElement(
            'option',
            { key: key, value: key },
            options[key]
          );
        })
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
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

      return new Promise(function (resolve, reject) {
        if (required && v.length == 0) {
          throw new _ValidationError2.default(name, "Value is required", _this3);
        }

        resolve(v.length == 0 ? undefined : v);
      });
    }
  }]);

  return SelectInput;
}(_react2.default.Component);

exports.default = SelectInput;