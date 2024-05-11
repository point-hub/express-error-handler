import ApiError from "@src/api-error.js";
import { isTrustedError } from "@src/base-error.js";

describe("BaseError", function () {
  describe("isTrustedError()", function () {
    it("return false if error object not instance of BaseError", function () {
      const error = new Error();
      expect(isTrustedError(error)).toEqual(false);
    });

    it("return true if error object instance of BaseError and it is operational error", function () {
      const error = new ApiError("Bad Request");
      expect(isTrustedError(error)).toEqual(true);
    });
  });
  describe("API Error", function () {
    it("additional errors info", function () {
      const errors = {
        username: "is exists",
        password: "min 8 digits",
      };
      const error = new ApiError(422, { errors: errors });
      expect(error.errors).toEqual(errors);
    });
  });
});
