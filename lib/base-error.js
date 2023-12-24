export default class BaseError extends Error {
    constructor(error) {
        super(error.message);
        // Set the prototype explicitly.
        // https://github.com/microsoft/TypeScript-wiki/blob/81fe7b91664de43c02ea209492ec1cea7f3661d0/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, BaseError.prototype);
        this.name = error.name;
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
