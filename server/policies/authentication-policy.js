const Joi = require('joi');

module.exports = (req, res, next) => {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{5,15}$')
      )
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please input a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Please make up a better password'
          })
          break
        default:
      }
    } else {
      next()
    }
  }
