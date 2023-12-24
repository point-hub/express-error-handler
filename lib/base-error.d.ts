export interface IError extends Error {
    name: string;
    code: number;
    status: string;
    message: string;
    errors?: object;
    stack?: string;
}
export default abstract class BaseError extends Error implements IError {
    name: string;
    code: number;
    status: string;
    message: string;
    errors?: object | undefined;
    stack?: string | undefined;
    constructor(error: IError);
    abstract get isOperational(): boolean;
}
export declare const isTrustedError: (err: Error) => boolean;
