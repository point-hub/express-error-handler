export interface IError extends Error {
    code: number;
    status: string;
    message: string;
    errors?: object;
    stack?: string;
}
export default abstract class BaseError extends Error implements IError {
    code: number;
    status: string;
    message: string;
    errors?: object | undefined;
    stack?: string | undefined;
    constructor(error: IError);
    abstract get isOperational(): boolean;
    abstract get name(): string;
}
export declare const isTrustedError: (err: Error) => boolean;
