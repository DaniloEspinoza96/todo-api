import { ErrorObject } from "ajv";

export default class Result {
  isValid: boolean;
  errors: Array<ErrorObject>;
}