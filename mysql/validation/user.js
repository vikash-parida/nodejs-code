const { check,body } = require('express-validator');

exports.userValidation = [
  check('name').notEmpty().withMessage('Name is required'),

  check('contact')
    .notEmpty()
    .withMessage('Contact No. is Required')
    .bail()
    .not()
    .custom((val) => /^[^0-9][+-]?[0-9]{1,15}[^0-9]$/g.test(val))
    .withMessage('Invalid Contact No.')

];
