import request from "supertest";
import { createApp } from "../../example/app.js";

const app = createApp();

describe("Test Middleware", function () {
  it("Invalid Path", async function () {
    const response = await request(app).get("/invalid-path").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(404);
    expect(response.body.code).toEqual(404);
    expect(response.body.status).toEqual("Not Found");
    expect(response.body.message).toEqual(
      "The URL is not recognized or endpoint is valid but the resource itself does not exist."
    );
  });

  it("Error", async function () {
    const response = await request(app).get("/test-error").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(500);
    expect(response.body.code).toEqual(500);
    expect(response.body.status).toEqual("Internal Server Error");
    expect(response.body.message).toEqual("Sorry something went wrong.");
  });

  it("Custom Error", async function () {
    const response = await request(app).get("/test-custom-error").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(400);
    expect(response.body.code).toEqual(400);
    expect(response.body.status).toEqual("Bad Request");
    expect(response.body.message).toEqual("Malformed request syntax.");
    expect(response.body.errors).toEqual({
      username: "is exists",
    });
  });
});
