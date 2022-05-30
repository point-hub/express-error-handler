import { Request, Response, NextFunction } from "express";
import { NotFound } from "./index.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorNotFound(req: Request, res: Response, next: NextFunction) {
  next(new NotFound());
}
