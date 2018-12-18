const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateloginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.email) ? data.email : '';
  data.name = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};
