import { Request, Response, NextFunction } from "express";
import { ApiError } from "./index.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorNotFound(req: Request, res: Response, next: NextFunction) {
  next(new ApiError(404));
}
