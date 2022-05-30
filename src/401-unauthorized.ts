import { STATUS_CODES } from "http";
import { constants } from "http2";
import ApiError from "./api-error.js";

export default class Unauthorized extends ApiError {
  constructor(message = STATUS_CODES[constants.HTTP_STATUS_UNAUTHORIZED] as string) {
    super(message);
  }

  get httpCode(): number {
    return constants.HTTP_STATUS_UNAUTHORIZED;
  }
}