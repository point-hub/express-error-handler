export interface IHttpStatus {
  code: number;
  status: string;
  message: string;
}

export type TypeCodeStatus =
  | 400
  | 401
  | 403
  | 404
  | 422
  | 429
  | 500
  | "Bad Request"
  | "Unauthorized"
  | "Forbidden"
  | "Not Found"
  | "Unprocessable Entity"
  | "Too Many Requests"
  | "Internal Server Error";

export function find(codeStatus: TypeCodeStatus) {
  if (typeof codeStatus === "number") {
    return httpStatus.find((obj) => {
      return obj.code === codeStatus;
    });
  } else {
    return httpStatus.find((obj) => {
      return obj.status === codeStatus;
    });
  }
}

export const httpStatus: Array<IHttpStatus> = [
  {
    code: 400,
    status: "Bad Request",
    message: "The server cannot process the request.",
  },
  {
    code: 401,
    status: "Unauthorized",
    message: "Authentication credentials is invalid.",
  },
  {
    code: 403,
    status: "Forbidden",
    message: "Don't have necessary permissions for this resource.",
  },
  {
    code: 404,
    status: "Not Found",
    message: "The URL is not recognized or endpoint is valid but the resource itself does not exist.",
  },
  {
    code: 422,
    status: "Unprocessable Entity",
    message: "The request was well-formed but was unable to be followed due to semantic errors.",
  },
  {
    code: 429,
    status: "Too Many Requests",
    message: "Sent too many requests in a given amount of time.",
  },
  {
    code: 500,
    status: "Internal Server Error",
    message: "An unexpected condition was encountered.",
  },
];
