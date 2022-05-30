import { STATUS_CODES } from "http";
import { constants } from "http2";
import ApiError from "./api-error.js";

export default class UnprocessableEntity extends ApiError {
  constructor(message = STATUS_CODES[constants.HTTP_STATUS_UNPROCESSABLE_ENTITY] as string) {
    super(message);
  }

  public get httpCode(): number {
    return constants.HTTP_STATUS_UNPROCESSABLE_ENTITY;
  }
}
