import ApiError from "@src/api-error.js";
import { isTrustedError } from "@src/base-error.js";
import {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  UnprocessableEntity,
  TooManyRequest,
} from "@src/index.js";

describe("BaseError", function () {
  describe("isTrustedError()", function () {
    it("return false if error object not instance of BaseError", function () {
      const error = new Error();
      expect(isTrustedError(error)).toEqual(false);
    });

    it("return true if error object instance of BaseError and it is operational error", function () {
      const error = new BadRequest();
      expect(isTrustedError(error)).toEqual(true);
    });
  });
});

describe("400 Bad Request", function () {
  const error = new BadRequest();
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 400", function () {
    expect(error.httpCode).toEqual(400);
  });
});

describe("401 Unauthorized", function () {
  const error = new Unauthorized();
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 401", function () {
    expect(error.httpCode).toEqual(401);
  });
});

describe("403 Forbidden", function () {
  const error = new Forbidden();
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 403", function () {
    expect(error.httpCode).toEqual(403);
  });
});

describe("404 Not Found", function () {
  const error = new NotFound();
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 404", function () {
    expect(error.httpCode).toEqual(404);
  });
});

describe("405 Method Not Allowed", function () {
  const error = new MethodNotAllowed();
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 405", function () {
    expect(error.httpCode).toEqual(405);
  });
});

describe("422 Unprocessable Entity", function () {
  const error = new UnprocessableEntity();
  error.info = {
    username: "is required",
    password: "is required",
  };
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 422", function () {
    expect(error.httpCode).toEqual(422);
  });
});

describe("429 Too Many Request", function () {
  const error = new TooManyRequest();
  it("instance of Api Error", function () {
    expect(error).toBeInstanceOf(ApiError);
  });
  it("http code return 429", function () {
    expect(error.httpCode).toEqual(429);
  });
});
