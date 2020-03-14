import React from 'react';
import { findDOMNode } from 'react-dom';
import ValidationError from '../ValidationError';

let UNIQUE_ID = 0;

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      value: props.defaultValue || undefined
    };
    this.frameId = "__FILE_UPLOAD_FRAME_" + ++UNIQUE_ID + "__";
    this.onUploaded = this._onUploaded.bind(this);
    this.promises = [];
  }

  componentDidMount() {
    findDOMNode(this.refs.frame).addEventListener("load", this.onUploaded);
  }

  componentWillUnmount() {
    // honor all the promises with rejections
    this.promises.forEach(promise => promise.reject("File upload aborted"));
    this.promises = [];
    // release the iframe load listener
    findDOMNode(this.refs.frame).removeEventListener("load", this.onUploaded);
  }

  getValue() {
    if (this.state.uploading) {
      return new Promise((resolve, reject) => {
        this.promises.push({
          resolve, reject
        });
      });
    } else {
      return Promise.resolve(this.state.value);
    }
  }

  validate(value) {
    const { name, required } = this.props;

    return new Promise((resolve, reject) => {
      if (required && value === undefined) {
        throw new ValidationError(name, "Valid is required", this);
      }

      resolve(value);
    });
  }

  _onUpload(e) {
    // This callback runs only after a value is available on file input
    // Upload the file input
    findDOMNode(this.refs.form).submit();

    // Update the state, to allow user to cancel or let the operation
    // complete
    this.setState({
      uploading: true
    });
  }

  _onUploaded() {
    const iframe = findDOMNode(this.refs.frame);
    const response = iframe.contentDocument.documentElement.innerText;

    console.log(response);
    console.log("Text:", iframe.contentDocument.textContent);
    console.log("Content: ", iframe.contentDocument.contentType);

    // Get the value from the response
    const value = response;
    // honor all the promises
    this.promises.forEach(promise => promise.resolve(value));
    this.promises = [];

    this.setState({
      uploading: false,
      value: value
    });
  }

  render() {
    const { uploadUrl } = this.props;

    let component = React.createElement(
      'label',
      { className: 'file', style: { display: 'block' } },
      React.createElement('span', { className: 'file-custom' }),
      React.createElement(
        'form',
        { ref: 'form', action: uploadUrl, method: 'POST',
          encType: 'multipart/form-data',
          target: this.frameId,
          style: {
            position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, opacity: 0
          } },
        React.createElement('input', { type: 'file', name: 'file', onChange: this._onUpload.bind(this),
          style: { width: '100%', height: '100%', opacity: 0 } })
      )
    );

    return React.createElement(
      'div',
      null,
      component,
      React.createElement('iframe', { ref: 'frame', id: this.frameId, name: this.frameId, style: { width: 0, height: 0, border: 'none' } })
    );
  }
}

FileInput.propTypes = {
  uploadUrl: React.PropTypes.string.isRequired
};

FileInput.defaultProps = {
  uploadUrl: "/upload"
};

export default FileInput;