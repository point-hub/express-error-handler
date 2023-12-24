export interface IHttpStatus {
    name: string;
    code: number;
    status: string;
    message: string;
}
export type TypeCodeStatus = 400 | 401 | 403 | 404 | 422 | 429 | 500 | "Bad Request" | "Unauthorized" | "Forbidden" | "Not Found" | "Unprocessable Entity" | "Too Many Requests" | "Internal Server Error";
export declare function find(codeStatus: TypeCodeStatus): IHttpStatus | undefined;
export declare const httpStatus: Array<IHttpStatus>;
