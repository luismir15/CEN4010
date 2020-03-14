"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationError = function ValidationError(name, message, element) {
  _classCallCheck(this, ValidationError);

  Object.defineProperties(this, {
    name: { value: name },
    message: { value: message },
    element: { value: element }
  });
};

exports.default = ValidationError;