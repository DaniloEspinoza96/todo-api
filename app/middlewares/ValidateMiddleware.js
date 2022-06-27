import Validate from '../ajv/Validate.js';

export class ValidateMiddleware {
  schema;
  validate;

  constructor(schema) {
    this.schema = schema;
    this.validate = new Validate();
  }

  run = (req, res, next) => {
    const { body } = req;
    this.validate.run(this.schema, body);
    
    if (!this.validate.result.isValid) {
      res.status(400).json({
        message: this.validate.result.errors
      });
    } else {
      next();
    }
  }
}