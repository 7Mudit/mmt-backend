class CustomException extends Error {
  constructor(errorCode, message) {
    super(message);
    this.statusCode = errorCode;
  }
}

module.exports = { CustomException };
