import BaseError from "./base-error.js";

export default abstract class ApiError extends BaseError {
  constructor(message: string) {
    super(message);
  }

  abstract get httpCode(): number;

  get isOperational() {
    return true;
  }
}
