const validator = require('express-validator')
/**
 * @param  {validator.ValidationChain[]} validations
 */
const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
    await validation.run(req);
  }
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    return `${location}[${param}]: ${msg}, but it's ${value}`;
  };
    const errors = validator.validationResult(req).formatWith(errorFormatter);
    if (errors.isEmpty()) {
      return next();
    }
    next(JSON.stringify(errors))
  };
};

module.exports = {
  validate
}