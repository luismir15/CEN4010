'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ValidationError = require('../ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNIQUE_ID = 0;

var FileInput = function (_React$Component) {
  _inherits(FileInput, _React$Component);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileInput).call(this, props));

    _this.state = {
      uploading: false,
      value: props.defaultValue || undefined
    };
    _this.frameId = "__FILE_UPLOAD_FRAME_" + ++UNIQUE_ID + "__";
    _this.onUploaded = _this._onUploaded.bind(_this);
    _this.promises = [];
    return _this;
  }

  _createClass(FileInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _reactDom.findDOMNode)(this.refs.frame).addEventListener("load", this.onUploaded);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // honor all the promises with rejections
      this.promises.forEach(function (promise) {
        return promise.reject("File upload aborted");
      });
      this.promises = [];
      // release the iframe load listener
      (0, _reactDom.findDOMNode)(this.refs.frame).removeEventListener("load", this.onUploaded);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _this2 = this;

      if (this.state.uploading) {
        return new Promise(function (resolve, reject) {
          _this2.promises.push({
            resolve: resolve, reject: reject
          });
        });
      } else {
        return Promise.resolve(this.state.value);
      }
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var _this3 = this;

      var _props = this.props;
      var name = _props.name;
      var required = _props.required;


      return new Promise(function (resolve, reject) {
        if (required && value === undefined) {
          throw new _ValidationError2.default(name, "Valid is required", _this3);
        }

        resolve(value);
      });
    }
  }, {
    key: '_onUpload',
    value: function _onUpload(e) {
      // This callback runs only after a value is available on file input
      // Upload the file input
      (0, _reactDom.findDOMNode)(this.refs.form).submit();

      // Update the state, to allow user to cancel or let the operation
      // complete
      this.setState({
        uploading: true
      });
    }
  }, {
    key: '_onUploaded',
    value: function _onUploaded() {
      var iframe = (0, _reactDom.findDOMNode)(this.refs.frame);
      var response = iframe.contentDocument.documentElement.innerText;

      console.log(response);
      console.log("Text:", iframe.contentDocument.textContent);
      console.log("Content: ", iframe.contentDocument.contentType);

      // Get the value from the response
      var value = response;
      // honor all the promises
      this.promises.forEach(function (promise) {
        return promise.resolve(value);
      });
      this.promises = [];

      this.setState({
        uploading: false,
        value: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var uploadUrl = this.props.uploadUrl;


      var component = _react2.default.createElement(
        'label',
        { className: 'file', style: { display: 'block' } },
        _react2.default.createElement('span', { className: 'file-custom' }),
        _react2.default.createElement(
          'form',
          { ref: 'form', action: uploadUrl, method: 'POST',
            encType: 'multipart/form-data',
            target: this.frameId,
            style: {
              position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, opacity: 0
            } },
          _react2.default.createElement('input', { type: 'file', name: 'file', onChange: this._onUpload.bind(this),
            style: { width: '100%', height: '100%', opacity: 0 } })
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        component,
        _react2.default.createElement('iframe', { ref: 'frame', id: this.frameId, name: this.frameId, style: { width: 0, height: 0, border: 'none' } })
      );
    }
  }]);

  return FileInput;
}(_react2.default.Component);

FileInput.propTypes = {
  uploadUrl: _react2.default.PropTypes.string.isRequired
};

FileInput.defaultProps = {
  uploadUrl: "/upload"
};

exports.default = FileInput;