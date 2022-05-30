import { BaseError } from "@src/index.js";

type LooseObject = {
  [key: string]: unknown;
};

export default class CustomError extends BaseError {
  constructor(message = "Custom Error") {
    super(message);
  }

  get httpCode() {
    return 422;
  }

  get isOperational() {
    return true;
  }

  handle(error: LooseObject) {
    this.info = {
      ...error,
    };
    return this;
  }
}
