'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fieldset = require('./Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _inputs = require('./inputs');

var Inputs = _interopRequireWildcard(_inputs);

var _connectInput = require('./connectInput');

var _connectInput2 = _interopRequireDefault(_connectInput);

var _ValidationError = require('./ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props, context) {
    _classCallCheck(this, Form);

    // A list of input elements available on this form
    // populated through the context by the the child inputs

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props, context));

    _this.inputs = {};

    _this.state = {
      preset: Object.assign({}, _this.props.preset, _this.props.suppress),
      error: false
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        preset: Object.assign({}, nextProps.preset, nextProps.suppress)
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        form: this
      };
    }

    /** Get all the values of the input elements in the form "asyncronously"
     * and also validates the value in the process
     */

  }, {
    key: 'serialize',
    value: function serialize() {
      var res = Object.assign({}, this.state.preset);
      var inputs = [];
      var names = [];
      var promises = [];
      for (var inp in this.inputs) {
        var elem = this.inputs[inp];
        names.push(inp);
        inputs.push(elem);
        promises.push(elem.getValue());
      }
      return Promise.all(promises).then(function (values) {
        var promises = values.map(function (val, index) {
          return inputs[index].validate(val);
        });
        return Promise.all(promises).then(function (values) {
          values.forEach(function (val, index) {
            if (val !== undefined) {
              res[names[index]] = val;
            }
          });

          return res;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var error = this.state.error;
      if (!children) {
        children = generate(this.props.attributes, this.props.suppress);
        children.push(_react2.default.createElement(
          Form.Fieldset,
          { key: 'form__submit__', label: '' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-sm btn-primary', type: 'submit', onClick: this._onSubmit.bind(this) },
            'Save'
          )
        ));
      }

      return _react2.default.createElement(
        'div',
        { className: 'form', onSubmit: this._onSubmit.bind(this) },
        typeof error === "string" && _react2.default.createElement(
          'div',
          { className: '.alert-danger' },
          error
        ),
        children
      );
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      var actionUrl = typeof this.props.action === "function" ? this.props.action(props) : this.props.action;
      var method = this.props.method || (this.props.preset ? "PUT" : "POST"); // Automatically detect the form post method
      this.serialize().then(function (res) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, actionUrl);
        xhr.onload = function () {
          var response = xhr.response;
          // Parsing the JSON type data, checking with startsWith, as charset may also be available
          // TODO: A good content type parser with charsets need to be implemented
          if (xhr.getResponseHeader('content-type').startsWith("application/json")) {
            response = JSON.parse(response);
          }
          if (xhr.status >= 200 && xhr.status < 300) {
            _this2.props.onSuccess && _this2.props.onSuccess(response);
          } else if (xhr.status >= 400 && xhr.status < 500) {
            _this2._handleError("Invalid server configuration. The resource could not be found.", response);
          } else if (xhr.status >= 500 && xhr.status < 600) {
            _this2._handleError("Invalid input data", response);
          } else {
            _this2._handleError("Unknown error. Please contact system administrator. " + xhr.status + "::" + xhr.statusText, response);
          }
        };
        xhr.onerror = function () {
          return _this2._handleError("Network error", null);
        };

        if ((typeof res === 'undefined' ? 'undefined' : _typeof(res)) === "object") {
          res = JSON.stringify(res);
        }

        xhr.send(res);
      }).catch(function (err) {
        if (err instanceof _ValidationError2.default) {
          _this2.setError(err.name, err.message);
        } else {
          console.error("Unknown Error", err);
          _this2.setState({
            error: "Unknown error"
          });
        }
      });
    }
  }, {
    key: '_handleError',
    value: function _handleError(msg, data) {
      this.setState({
        error: msg
      });
    }
  }, {
    key: 'getDefaultValue',
    value: function getDefaultValue(name) {
      return this.props.preset && this.props.preset[name];
    }
  }, {
    key: 'registerInput',
    value: function registerInput(name, element) {
      // The name should not be registered more than once
      if (this.inputs.hasOwnProperty(name)) {
        console.error("A form input with name '" + name + "' is already registered." + " The element you are trying to register is not going to be registered." + " There shouldn't be more than one input element with the same name. In " + " case you are using a checkbox or a radio button make sure you incapsulate " + " them in a parent component and use that parent component as the input element.");
      } else {
        this.inputs[name] = element;
      }
    }
  }, {
    key: 'unregisterInput',
    value: function unregisterInput(name, element) {
      // Unregister only if the name and element matches, trying to avoid
      // same name regsitration error problem
      if (this.inputs[name] === element) {
        delete this.inputs[name];
      }
    }
  }, {
    key: 'getError',
    value: function getError(name) {
      return _typeof(this.state.error) === "object" && this.state.error[name];
    }
  }, {
    key: 'setError',
    value: function setError(name, error) {
      var err = _typeof(this.state.error) === "object" ? this.state.error : {};
      if (err[name] !== error) {
        err[name] = error;
        console.log("State errro", name, error);
        this.setState({
          error: err
        });
      }
    }
  }, {
    key: 'clearError',
    value: function clearError(name) {
      if (_typeof(this.state.error) === "object") {
        if (this.state.error.hasOwnProperty(name)) {
          delete this.state.error[name];
          this.setState({
            error: this.state.error
          });
        }
      }
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.Fieldset = _Fieldset2.default;
Form.DefaultInput = (0, _connectInput2.default)(Inputs.TextInput);

Form.Inputs = {};
for (var n in Inputs) {
  var inp = Inputs[n];
  if (n.endsWith("Input")) {
    n = n.substring(0, n.length - 5);
  }
  Form.Inputs[n] = (0, _connectInput2.default)(inp);
}

// Overide this value to provide a custom input control based on a name
Form.InputHook = undefined;

var Model = function Model(props, context) {
  return _react2.default.createElement(
    'div',
    props,
    generate(context.form.props.attributes, context.form.props.suppress)
  );
};

Model.contextTypes = {
  form: _react.PropTypes.object
};

/* Generate a form for the model */
function generate(attributes, suppress) {
  var inputs = [];
  for (var i in attributes) {
    var attr = attributes[i];
    if (suppress && suppress.hasOwnProperty(attr.name)) {
      continue;
    }

    inputs.push(_react2.default.createElement(_Input2.default, _extends({ key: attr.name }, attr)));
  }

  return inputs;
}

Form.childContextTypes = {
  form: _react.PropTypes.object
};

Form.propTypes = {
  action: _react.PropTypes.string, /* The url where the data needs to be posted */
  method: _react.PropTypes.string, /* The HTTP method for sending data */

  attributes: _react.PropTypes.array, /* The model attributes that can be automatically generated */
  preset: _react.PropTypes.object, /* The values to be used as default values for inputs */
  suppress: _react.PropTypes.object, /* The model attributes to be suppressed during automatic generation */

  onSubmit: _react.PropTypes.func, /* Override default onSubmit. The data posting will not take place. */
  onValidate: _react.PropTypes.func, /* A validation method that can validate/change the data before submission. Should throw ValidationError. */
  onSuccess: _react.PropTypes.func, /* Callback invoked once the data is submitted successfully to the server */
  onError: _react.PropTypes.func /* Callback invoked when the data could not be submitted to the server */
};

Form.connect = _connectInput2.default;

exports.Model = Model;
exports.default = Form;