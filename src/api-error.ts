import BaseError, { IError } from "./base-error.js";
import { find, TypeCodeStatus } from "./http-status.js";

export default class ApiError extends BaseError {
  constructor(codeStatus: TypeCodeStatus, message?: string, errors?: object) {
    const status = find(codeStatus);

    if (!status) {
      throw new Error(`Error codeStatus "${codeStatus}" not found`);
    }

    const error: IError = status;

    if (message) {
      error.message = message;
    }

    if (error.code === 422 && errors) {
      error.errors = errors;
    }

    super(error);
  }

  get isOperational() {
    return true;
  }

  override get name(): string {
    return "ApiError";
  }
}
