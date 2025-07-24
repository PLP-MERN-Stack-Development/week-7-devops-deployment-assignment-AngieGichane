const jwt = require('jsonwebtoken');
const logger = require('../config/logger');
const createError = require('http-errors');

module.exports = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new createError(401, 'Please log in to access this resource'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    logger.error(`Authentication error: ${err.message}`);
    next(new createError(401, 'Invalid token. Please log in again.'));
  }
};