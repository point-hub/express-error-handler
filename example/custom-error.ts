import { IError } from "@src/base-error.js";
import { BaseError } from "@src/index.js";

export default class CustomError extends BaseError {
  constructor(sourceError: { exists: Array<string> }) {
    const error: IError = {
      name: "CustomError",
      code: 400,
      status: "Bad Request",
      message: "Malformed request syntax.",
    };

    super(error);

    if (sourceError.exists) {
      this.errors = {
        username: `is exists`,
      };
    }
  }

  get isOperational() {
    return true;
  }

  override get name() {
    return "CustomError";
  }
}
