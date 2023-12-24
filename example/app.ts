import express, { Express, NextFunction, Request, Response } from "express";
import CustomError from "./custom-error.js";
import { invalidPathMiddleware, errorHandlerMiddleware } from "@src/index.js";

export function createApp() {
  const app: Express = express();

  app.get("/test-error", (req: Request, res: Response, next: NextFunction) => {
    try {
      throw new Error();
    } catch (error) {
      return next(error);
    }
  });

  app.get("/test-custom-error", (req: Request, res: Response, next: NextFunction) => {
    try {
      // error from 3rd party library
      const customError = {
        exists: ["username"],
      };

      throw new CustomError(customError);
    } catch (error) {
      return next(error);
    }
  });

  app.use(invalidPathMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
