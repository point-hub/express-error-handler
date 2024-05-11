import BaseError, { IError } from "./base-error.js";
import { find, TypeCodeStatus } from "./http-status.js";

export interface IOptions {
  message?: string;
  errors?: object;
}

export default class ApiError extends BaseError {
  constructor(codeStatus: TypeCodeStatus, options?: IOptions) {
    const status = find(codeStatus);

    if (!status) {
      throw new Error(`Error codeStatus "${codeStatus}" not found`);
    }

    const error: IError = status;

    if (options?.message) {
      error.message = options.message;
    }

    if (error.code >= 400 && error.code <= 500 && options?.errors) {
      error.errors = options.errors;
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
