import ajv, { Ajv, AnySchema } from 'ajv';
import Result from './Result.js';

class Validate {
  ajv: Ajv;
  result: Result;

  constructor() {
    this.ajv = new ajv;
    this.result = new Result();
  }
    run(schema: AnySchema, data: Request) {
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

export default Validate;