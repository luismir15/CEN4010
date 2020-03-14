'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValidationError = require('../ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioInput = function (_React$Component) {
  _inherits(RadioInput, _React$Component);

  function RadioInput(props) {
    _classCallCheck(this, RadioInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioInput).call(this, props));

    _this.state = {
      value: props.defaultValue || undefined
    };
    return _this;
  }

  _createClass(RadioInput, [{
    key: 'getValue',
    value: function getValue() {
      var v = this.state.value;
      return new Promise(function (resolve) {
        resolve(v);
      });
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var _props = this.props;
      var name = _props.name;
      var required = _props.required;

      return new Promise(function (resolve, reject) {
        if (required && value === undefined) {
          throw new _ValidationError2.default(name, "One of the option needs to be selected");
        }

        resolve(value);
      });
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
      this.state.value = e.target.value;
      this.setState({
        value: this.state.value
      });

      this.props.onChange && this.props.onChange(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var options = _props2.options;
      var name = _props2.name;
      var optionClass = _props2.optionClass;

      var values = undefined,
          texts = undefined;
      if (options instanceof Array) {
        values = texts = options;
      } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
        values = Object.keys(options);
        texts = values.map(function (key) {
          return options[key];
        });
      } else {
        values = texts = [];
      }

      return _react2.default.createElement(
        'div',
        null,
        texts.map(function (text, index) {
          return _react2.default.createElement(
            'div',
            { className: optionClass || "radio", key: values[index] },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', { type: 'radio', name: name, value: values[index],
                onChange: _this2._onChange.bind(_this2),
                checked: values[index] === _this2.state.value }),
              text
            )
          );
        })
      );
    }
  }]);

  return RadioInput;
}(_react2.default.Component);

exports.default = RadioInput;