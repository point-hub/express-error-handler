export default class BaseError extends Error {
    constructor(error) {
        super(error.message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.code = error.code;
        this.status = error.status;
        this.message = error.message;
        this.errors = error.errors;
        Error.captureStackTrace(this);
    }
}
export const isTrustedError = (err) => {
    if (err instanceof BaseError) {
        return err.isOperational;
    }
    return false;
};
