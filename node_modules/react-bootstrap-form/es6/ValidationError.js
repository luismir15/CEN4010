class ValidationError {
  constructor(name, message, element) {
    Object.defineProperties(this, {
      name: { value: name },
      message: { value: message },
      element: { value: element }
    });
  }
}

export default ValidationError;