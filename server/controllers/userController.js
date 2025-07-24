const User = require('../models/User');
const logger = require('../config/logger');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllUsers = async (req, res, next) => {
  try {
    const features = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .paginate();
    
    const users = await features.query;

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    logger.error(`Get all users error: ${err.message}`);
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return next(new Error('No user found with that ID'));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    logger.error(`Get user error: ${err.message}`);
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    logger.error(`Get me error: ${err.message}`);
    next(err);
  }
};