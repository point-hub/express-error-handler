export interface IError {
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

    this.code = error.code;
    this.status = error.status;
    this.message = error.message;
    this.errors = error.errors;
  }

  abstract get isOperational(): boolean;
}

export const isTrustedError = (err: Error) => {
  if (err instanceof BaseError) {
    return err.isOperational;
  }

  return false;
};
