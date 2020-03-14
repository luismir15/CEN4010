var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';
import Fieldset from './Fieldset';
import * as Inputs from './inputs';
import connectInput from './connectInput';
import ValidationError from './ValidationError';
import Input from './Input';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    // A list of input elements available on this form
    // populated through the context by the the child inputs
    this.inputs = {};

    this.state = {
      preset: Object.assign({}, this.props.preset, this.props.suppress),
      error: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      preset: Object.assign({}, nextProps.preset, nextProps.suppress)
    });
  }

  getChildContext() {
    return {
      form: this
    };
  }

  /** Get all the values of the input elements in the form "asyncronously"
   * and also validates the value in the process
   */
  serialize() {
    const res = Object.assign({}, this.state.preset);
    const inputs = [];
    const names = [];
    const promises = [];
    for (let inp in this.inputs) {
      const elem = this.inputs[inp];
      names.push(inp);
      inputs.push(elem);
      promises.push(elem.getValue());
    }
    return Promise.all(promises).then(values => {
      const promises = values.map((val, index) => inputs[index].validate(val));
      return Promise.all(promises).then(values => {
        values.forEach((val, index) => {
          if (val !== undefined) {
            res[names[index]] = val;
          }
        });

        return res;
      });
    });
  }

  render() {
    let { children } = this.props;
    const error = this.state.error;
    if (!children) {
      children = generate(this.props.attributes, this.props.suppress);
      children.push(React.createElement(
        Form.Fieldset,
        { key: 'form__submit__', label: '' },
        React.createElement(
          'button',
          { className: 'btn btn-sm btn-primary', type: 'submit', onClick: this._onSubmit.bind(this) },
          'Save'
        )
      ));
    }

    return React.createElement(
      'div',
      { className: 'form', onSubmit: this._onSubmit.bind(this) },
      typeof error === "string" && React.createElement(
        'div',
        { className: '.alert-danger' },
        error
      ),
      children
    );
  }

  _onSubmit(e) {
    e.preventDefault();

    const actionUrl = typeof this.props.action === "function" ? this.props.action(props) : this.props.action;
    const method = this.props.method || (this.props.preset ? "PUT" : "POST"); // Automatically detect the form post method
    this.serialize().then(res => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, actionUrl);
      xhr.onload = () => {
        let response = xhr.response;
        // Parsing the JSON type data, checking with startsWith, as charset may also be available
        // TODO: A good content type parser with charsets need to be implemented
        if (xhr.getResponseHeader('content-type').startsWith("application/json")) {
          response = JSON.parse(response);
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          this.props.onSuccess && this.props.onSuccess(response);
        } else if (xhr.status >= 400 && xhr.status < 500) {
          this._handleError("Invalid server configuration. The resource could not be found.", response);
        } else if (xhr.status >= 500 && xhr.status < 600) {
          this._handleError("Invalid input data", response);
        } else {
          this._handleError("Unknown error. Please contact system administrator. " + xhr.status + "::" + xhr.statusText, response);
        }
      };
      xhr.onerror = () => this._handleError("Network error", null);

      if (typeof res === "object") {
        res = JSON.stringify(res);
      }

      xhr.send(res);
    }).catch(err => {
      if (err instanceof ValidationError) {
        this.setError(err.name, err.message);
      } else {
        console.error("Unknown Error", err);
        this.setState({
          error: "Unknown error"
        });
      }
    });
  }

  _handleError(msg, data) {
    this.setState({
      error: msg
    });
  }

  getDefaultValue(name) {
    return this.props.preset && this.props.preset[name];
  }

  registerInput(name, element) {
    // The name should not be registered more than once
    if (this.inputs.hasOwnProperty(name)) {
      console.error("A form input with name '" + name + "' is already registered." + " The element you are trying to register is not going to be registered." + " There shouldn't be more than one input element with the same name. In " + " case you are using a checkbox or a radio button make sure you incapsulate " + " them in a parent component and use that parent component as the input element.");
    } else {
      this.inputs[name] = element;
    }
  }

  unregisterInput(name, element) {
    // Unregister only if the name and element matches, trying to avoid
    // same name regsitration error problem
    if (this.inputs[name] === element) {
      delete this.inputs[name];
    }
  }

  getError(name) {
    return typeof this.state.error === "object" && this.state.error[name];
  }

  setError(name, error) {
    const err = typeof this.state.error === "object" ? this.state.error : {};
    if (err[name] !== error) {
      err[name] = error;
      console.log("State errro", name, error);
      this.setState({
        error: err
      });
    }
  }

  clearError(name) {
    if (typeof this.state.error === "object") {
      if (this.state.error.hasOwnProperty(name)) {
        delete this.state.error[name];
        this.setState({
          error: this.state.error
        });
      }
    }
  }

}

Form.Fieldset = Fieldset;
Form.DefaultInput = connectInput(Inputs.TextInput);

Form.Inputs = {};
for (let n in Inputs) {
  const inp = Inputs[n];
  if (n.endsWith("Input")) {
    n = n.substring(0, n.length - 5);
  }
  Form.Inputs[n] = connectInput(inp);
}

// Overide this value to provide a custom input control based on a name
Form.InputHook = undefined;

const Model = (props, context) => React.createElement(
  'div',
  props,
  generate(context.form.props.attributes, context.form.props.suppress)
);

Model.contextTypes = {
  form: PropTypes.object
};

/* Generate a form for the model */
function generate(attributes, suppress) {
  const inputs = [];
  for (let i in attributes) {
    const attr = attributes[i];
    if (suppress && suppress.hasOwnProperty(attr.name)) {
      continue;
    }

    inputs.push(React.createElement(Input, _extends({ key: attr.name }, attr)));
  }

  return inputs;
}

Form.childContextTypes = {
  form: PropTypes.object
};

Form.propTypes = {
  action: PropTypes.string, /* The url where the data needs to be posted */
  method: PropTypes.string, /* The HTTP method for sending data */

  attributes: PropTypes.array, /* The model attributes that can be automatically generated */
  preset: PropTypes.object, /* The values to be used as default values for inputs */
  suppress: PropTypes.object, /* The model attributes to be suppressed during automatic generation */

  onSubmit: PropTypes.func, /* Override default onSubmit. The data posting will not take place. */
  onValidate: PropTypes.func, /* A validation method that can validate/change the data before submission. Should throw ValidationError. */
  onSuccess: PropTypes.func, /* Callback invoked once the data is submitted successfully to the server */
  onError: PropTypes.func /* Callback invoked when the data could not be submitted to the server */
};

Form.connect = connectInput;

export { Model };
export default Form;