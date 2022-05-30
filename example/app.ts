import express, { Express, NextFunction, Request, Response } from "express";
import CustomApiError from "../example/custom-api-error.js";
import CustomError from "../example/custom-error.js";
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
      // error from 3rd party library, ex: mongodb
      const customError = {
        username: "username is not available",
      };

      const error = new CustomError().handle(customError);
      throw error;
    } catch (error) {
      return next(error);
    }
  });

  app.get("/test-custom-api-error", (req: Request, res: Response, next: NextFunction) => {
    try {
      throw new CustomApiError();
    } catch (error) {
      return next(error);
    }
  });

  app.use(invalidPathMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
