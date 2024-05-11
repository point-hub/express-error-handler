import BaseError from "./base-error.js";
import { find } from "./http-status.js";
export default class ApiError extends BaseError {
    constructor(codeStatus, options) {
        const status = find(codeStatus);
        if (!status) {
            throw new Error(`Error codeStatus "${codeStatus}" not found`);
        }
        const error = status;
        if (options === null || options === void 0 ? void 0 : options.message) {
            error.message = options.message;
        }
        if (error.code >= 400 && error.code <= 500 && (options === null || options === void 0 ? void 0 : options.errors)) {
            error.errors = options.errors;
        }
        super(error);
    }
    get isOperational() {
        return true;
    }
    get name() {
        return "ApiError";
    }
}
