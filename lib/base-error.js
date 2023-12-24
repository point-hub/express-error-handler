export default class BaseError extends Error {
    constructor(error) {
        super(error.message);
        this.code = error.code;
        this.status = error.status;
        this.message = error.message;
        this.errors = error.errors;
        this.stack = error.stack;
    }
}
export const isTrustedError = (err) => {
    if (err instanceof BaseError) {
        return err.isOperational;
    }
    return false;
};
