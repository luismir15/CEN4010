import React from 'react';

const Fieldset = (props, context) => {

  const { id, name, label, description } = props;
  const error = context.form.getError(name);

  return React.createElement(
    "div",
    { className: "form-group row" + (error ? " has-danger" : "") },
    label && React.createElement(
      "label",
      { htmlFor: id, className: "col-sm-3 form-control-label" },
      label
    ),
    React.createElement(
      "div",
      { className: "col-sm-9" + (label === "" ? " col-sm-offset-3" : "") },
      props.children,
      description && React.createElement(
        "small",
        { className: "text-muted" },
        description
      ),
      typeof error === "string" && React.createElement(
        "small",
        { className: "text-muted text-help" },
        " ",
        error
      )
    )
  );
};

Fieldset.contextTypes = {
  form: React.PropTypes.object
};
export default Fieldset;