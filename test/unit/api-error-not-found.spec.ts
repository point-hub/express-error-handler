import { jest } from "@jest/globals";
import ApiError from "@src/api-error.js";

jest.mock("../../src/http-status.js", () => {
  return {
    find: jest.fn(() => undefined),
  };
});

describe("API Error", function () {
  it("codeStatus not found", function () {
    const codeStatus = 400;
    try {
      new ApiError(codeStatus);
    } catch (error) {
      const err = error as Error;
      expect(err.message).toEqual(`Error codeStatus "${codeStatus}" not found`);
    }
  });
});
