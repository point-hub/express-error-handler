import { Request, Response, NextFunction } from "express";
import BaseError from "./base-error.js";
import { isTrustedError } from "./index.js";

type ResponseType = {
  name: string;
  code: number;
  status: string;
  message: string;
  errors?: object;
  stack?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof BaseError && isTrustedError(err)) {
    const response: ResponseType = {
      name: err.name,
      code: err.code,
      status: err.status,
      message: err.message,
    };

    if (err.errors) {
      response.errors = err.errors;
    }
    
    if (err.stack) {
      response.stack = err.stack;
    }

    res.status(err.code).json(response);
    return next(err);
  }

  // Cannot handle error, return "INTERNAL SERVER ERROR"
  const response: ResponseType = {
    name: 'ServerError',
    code: 500,
    status: "Internal Server Error",
    message: "Sorry something went wrong.",
  };

  res.status(500).json(response);
  next(err);
}
