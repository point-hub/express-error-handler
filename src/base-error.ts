export interface IError extends Error {
  name: string;
  code: number;
  status: string;
  message: string;
  errors?: object;
  stack?: string;
}

export default abstract class BaseError extends Error implements IError {
  public name: string;
  public code: number;
  public status: string;
  public message: string;
  public errors?: object | undefined;
  public stack?: string | undefined;

  constructor(error: IError) {
    super(error.message);

    this.name = error.name;
    this.code = error.code;
    this.status = error.status;
    this.message = error.message;
    this.errors = error.errors;
    this.stack = error.stack;
  }

  abstract get isOperational(): boolean;
}

export const isTrustedError = (err: Error) => {
  if (err instanceof BaseError) {
    return err.isOperational;
  }

  return false;
};
