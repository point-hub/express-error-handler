import { ApiError } from "@src/index.js";

export default class CustomApiError extends ApiError {
  constructor(message = "Payment Required") {
    super(message);
  }

  get httpCode() {
    return 402;
  }

  get isOperational() {
    return true;
  }
}
