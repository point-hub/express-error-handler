import { STATUS_CODES } from "http";
import { constants } from "http2";
import { Request, Response, NextFunction } from "express";
import BaseError from "./base-error.js";
import { isTrustedError } from "./index.js";

type ResponseType = {
  code: number;
  message: string;
  info?: object;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof BaseError && isTrustedError(err)) {
    const response: ResponseType = {
      code: err.httpCode,
      message: err.message,
    };

    if (err.info) {
      response.info = err.info;
    }

    res.status(err.httpCode).json(response);
    return next(err);
  }

  // Cannot handle error, return "INTERNAL SERVER ERROR"
  const response: ResponseType = {
    code: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
    message: STATUS_CODES[constants.HTTP_STATUS_INTERNAL_SERVER_ERROR] as string,
  };

  res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).json(response);
  next(err);
}
