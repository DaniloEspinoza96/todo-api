import Ajv from 'ajv';
import Result from './Result.js';

export default class Validate {
  ajv;
  result;

  constructor() {
    this.ajv = new Ajv();
    this.result = new Result();
  }
    run(schema, data) {
      const validate = this.ajv.compile(schema);

      if (validate(data)) {
        this.result.isValid = true
        return this.result;
      }
      this.result.errors = validate.errors;
      this.result.isValid = false;

      return this.result;
    }
}