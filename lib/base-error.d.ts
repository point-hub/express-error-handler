export interface IError extends Error {
    code: number;
    status: string;
    message: string;
    errors?: object;
}
export default abstract class BaseError extends Error implements IError {
    code: number;
    status: string;
    message: string;
    errors?: object | undefined;
    constructor(error: IError);
    abstract get isOperational(): boolean;
    abstract get name(): string;
}
export declare const isTrustedError: (err: Error) => boolean;
