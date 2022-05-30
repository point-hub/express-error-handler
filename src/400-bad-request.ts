import { STATUS_CODES } from "http";
import { constants } from "http2";
import ApiError from "./api-error.js";

export default class BadRequest extends ApiError {
  constructor(message = STATUS_CODES[constants.HTTP_STATUS_BAD_REQUEST] as string) {
    super(message);
  }

  get httpCode(): number {
    return constants.HTTP_STATUS_BAD_REQUEST;
  }
}
