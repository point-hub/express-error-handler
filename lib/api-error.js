import BaseError from "./base-error.js";
import { find } from "./http-status.js";
export default class ApiError extends BaseError {
    constructor(codeStatus, message, errors) {
        const status = find(codeStatus);
        if (!status) {
            throw new Error(`Error codeStatus "${codeStatus}" not found`);
        }
        const error = status;
        if (message) {
            error.message = message;
        }
        if (error.code === 422 && errors) {
            error.errors = errors;
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
