'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (Component) {
  var FormInput = _react2.default.createClass({
    displayName: 'FormInput',

    propTypes: {
      name: _react2.default.PropTypes.string.isRequired
    },

    contextTypes: {
      form: _react2.default.PropTypes.object
    },

    componentDidMount: function componentDidMount() {
      if (!this.refs.input.getValue) {
        console.warn("A form component must provide a getValue method that " + "provides the value for the value for the component");
      }

      this.context.form.registerInput(this.props.name, this);
    },
    componentWillUnmount: function componentWillUnmount() {
      this.context.form.unregisterInput(this.props.name, this);
    },


    /**
     * This is the method called by the form to get the value.
     * It is allowed for the getValue method to return a promise. Make
     * sure the getValue method is provided in the component
     */
    getValue: function getValue() {
      var v = this.refs.input.getValue();
      if (v instanceof Promise) {
        return v;
      } else {
        return new Promise(function (resolve) {
          return resolve(v);
        });
      }
    },
    validate: function validate(value) {
      var v = this.refs.input.validate(value);
      if (v instanceof Promise) {
        return v;
      } else {
        return new Promise(function (resolve) {
          return resolve(v);
        });
      }
    },
    _onChange: function _onChange(e) {
      var _this = this;

      var name = this.props.name;


      this.getValue().then(function (value) {
        _this.validate(value).then(function (value) {
          _this.context.form.clearError(name);
        }).catch(function (err) {
          if (err instanceof _ValidationError2.default) {
            _this.context.form.setError(err.name, err.message);
          } else {
            console.error("Unknown error", err);
            _this.context.form.setError(name, err.toString());
          }
        });
      }).catch(function (err) {
        if (err instanceof _ValidationError2.default) {
          _this.context.form.setError(err.name, err.message);
        } else {
          console.error("Unknown error", err);
          _this.context.form.setError(name, err.toString());
        }
      });

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    },
    render: function render() {
      /* get the default value and provide it to the underlying component */
      var defaultValue = this.context.form.getDefaultValue(this.props.name);
      var error = this.context.form.getError(this.props.name);

      /* Override the defaultValue prop if its provided */
      return _react2.default.createElement(Component, _extends({ ref: 'input' }, this.props, { defaultValue: defaultValue, onChange: this._onChange, error: error }));
    }
  });

  return FormInput;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValidationError = require('./ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }