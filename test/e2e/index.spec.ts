import request from "supertest";
import { createApp } from "../../example/app.js";

const app = createApp();

describe("Test Middleware", function () {
  it("Invalid Path", async function () {
    const response = await request(app).get("/invalid-path").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(404);
    expect(response.body.code).toEqual(404);
    expect(response.body.message).toEqual("Not Found");
  });

  it("Error", async function () {
    const response = await request(app).get("/test-error").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(500);
    expect(response.body.code).toEqual(500);
    expect(response.body.message).toEqual("Internal Server Error");
  });

  it("Custom Error", async function () {
    const response = await request(app).get("/test-custom-error").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(422);
    expect(response.body.code).toEqual(422);
    expect(response.body.message).toEqual("Custom Error");
    expect(response.body.info).toEqual({
      username: "username is not available",
    });
  });

  it("Custom Api Error", async function () {
    const response = await request(app).get("/test-custom-api-error").set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(402);
    expect(response.body.code).toEqual(402);
    expect(response.body.message).toEqual("Payment Required");
  });
});
