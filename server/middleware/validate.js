const { validationResult } = require('express-validator');
const createError = require('http-errors');

module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const errorMessages = errors.array().map(err => err.msg);
    next(new createError(400, errorMessages.join(', ')));
  };
};