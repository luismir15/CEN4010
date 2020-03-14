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

var CheckBoxInput = function (_React$Component) {
  _inherits(CheckBoxInput, _React$Component);

  function CheckBoxInput(props) {
    _classCallCheck(this, CheckBoxInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBoxInput).call(this, props));

    _this.state = {
      values: props.defaultValue || []
    };
    return _this;
  }

  _createClass(CheckBoxInput, [{
    key: '_onChange',
    value: function _onChange(e) {
      var res = this.state.values;
      if (e.target.checked) {
        res.push(e.target.value);
      } else {
        res.splice(res.indexOf(e.target.value), 1);
      }

      this.setState({
        values: res
      });

      this.props.onChange && this.props.onChange(e);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _this2 = this;

      return new Promise(function (resolve) {
        return resolve(_this2.state.values);
      });
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var _this3 = this;

      var _props = this.props;
      var name = _props.name;
      var minSelection = _props.minSelection;
      var maxSelection = _props.maxSelection;
      var required = _props.required;

      return new Promise(function (resolve, reject) {
        if (required && value.length === 0) {
          throw new _ValidationError2.default(name, "One of the value must be selected", _this3);
        }
        if (value.length === 0) {
          resolve(undefined);
        }
        if (minSelection !== undefined && value.length < minSelection) {
          throw new _ValidationError2.default(name, "At least " + minSelection + " options must be selected", _this3);
        }
        if (maxSelection !== undefined && value.length > maxSelection) {
          throw new _ValidationError2.default(name, "Only upto " + maxSelection + " options can be selected", _this3);
        }

        resolve(value);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
            { className: optionClass || "checkbox", key: values[index] },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', { type: 'checkbox', name: name, value: values[index],
                onChange: _this4._onChange.bind(_this4),
                checked: _this4.state.values.indexOf(values[index]) > -1 }),
              text
            )
          );
        })
      );
    }
  }]);

  return CheckBoxInput;
}(_react2.default.Component);

exports.default = CheckBoxInput;