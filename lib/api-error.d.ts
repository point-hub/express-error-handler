import BaseError from "./base-error.js";
import { TypeCodeStatus } from "./http-status.js";
export interface IOptions {
    message?: string;
    errors?: object;
}
export default class ApiError extends BaseError {
    constructor(codeStatus: TypeCodeStatus, options?: IOptions);
    get isOperational(): boolean;
    get name(): string;
}
