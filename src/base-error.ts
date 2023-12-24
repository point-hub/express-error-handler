export interface IError extends Error {
  code: number;
  status: string;
  message: string;
  errors?: object;
}

export default abstract class BaseError extends Error implements IError {
  public code: number;
  public status: string;
  public message: string;
  public errors?: object | undefined;

  constructor(error: IError) {
    super(error.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.code = error.code;
    this.status = error.status;
    this.message = error.message;
    this.errors = error.errors;

    Error.captureStackTrace(this);
  }

  abstract get isOperational(): boolean;
  abstract get name(): string;
}

export const isTrustedError = (err: Error) => {
  if (err instanceof BaseError) {
    return err.isOperational;
  }

  return false;
};
