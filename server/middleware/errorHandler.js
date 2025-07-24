const logger = require('../config/logger');
const createError = require('http-errors');

module.exports = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });
  
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};