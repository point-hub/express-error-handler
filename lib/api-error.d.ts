import BaseError from "./base-error.js";
import { TypeCodeStatus } from "./http-status.js";
export default class ApiError extends BaseError {
    constructor(codeStatus: TypeCodeStatus, message?: string, errors?: object);
    get isOperational(): boolean;
    get name(): string;
}
