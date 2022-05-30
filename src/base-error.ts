export default abstract class BaseError extends Error {
  // You can attach relevant information to the error instance
  public info?: object;

  constructor(message: string) {
    super(message);
  }

  abstract get httpCode(): number;

  abstract get isOperational(): boolean;
}

export const isTrustedError = (err: Error) => {
  if (err instanceof BaseError) {
    return err.isOperational;
  }

  return false;
};
