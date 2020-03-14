var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ValidationError from './ValidationError';

export default function (Component) {
  const FormInput = React.createClass({
    displayName: 'FormInput',

    propTypes: {
      name: React.PropTypes.string.isRequired
    },

    contextTypes: {
      form: React.PropTypes.object
    },

    componentDidMount() {
      if (!this.refs.input.getValue) {
        console.warn("A form component must provide a getValue method that " + "provides the value for the value for the component");
      }

      this.context.form.registerInput(this.props.name, this);
    },

    componentWillUnmount() {
      this.context.form.unregisterInput(this.props.name, this);
    },

    /**
     * This is the method called by the form to get the value.
     * It is allowed for the getValue method to return a promise. Make
     * sure the getValue method is provided in the component
     */
    getValue() {
      const v = this.refs.input.getValue();
      if (v instanceof Promise) {
        return v;
      } else {
        return new Promise(resolve => resolve(v));
      }
    },

    validate(value) {
      const v = this.refs.input.validate(value);
      if (v instanceof Promise) {
        return v;
      } else {
        return new Promise(resolve => resolve(v));
      }
    },

    _onChange(e) {
      const { name } = this.props;

      this.getValue().then(value => {
        this.validate(value).then(value => {
          this.context.form.clearError(name);
        }).catch(err => {
          if (err instanceof ValidationError) {
            this.context.form.setError(err.name, err.message);
          } else {
            console.error("Unknown error", err);
            this.context.form.setError(name, err.toString());
          }
        });
      }).catch(err => {
        if (err instanceof ValidationError) {
          this.context.form.setError(err.name, err.message);
        } else {
          console.error("Unknown error", err);
          this.context.form.setError(name, err.toString());
        }
      });

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    },

    render() {
      /* get the default value and provide it to the underlying component */
      const defaultValue = this.context.form.getDefaultValue(this.props.name);
      const error = this.context.form.getError(this.props.name);

      /* Override the defaultValue prop if its provided */
      return React.createElement(Component, _extends({ ref: 'input' }, this.props, { defaultValue: defaultValue, onChange: this._onChange, error: error }));
    }
  });

  return FormInput;
}