const Joi = require('@hapi/joi');
const httpStatus = require('http-status');
const { pick } = require('lodash');
const AppError = require('../utils/AppError');

const validate = schema => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map(details => details.message).join(', ');
    // return next(new AppError(httpStatus.BAD_REQUEST, errorMessage));
    return res.status(400).send({status:400, message:errorMessage});
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
