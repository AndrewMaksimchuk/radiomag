import request from "supertest";
import { endpoints } from "../src/routes/endpoints";

const baseURL = "http://localhost:3000";

describe("GET /contacts", () => {
  it("return 200", async () => {
    const response = await request(baseURL).get(endpoints.contacts);
    expect(response.statusCode).toBe(200);
  });

  it("'content-type' is 'application/json'", async () => {
    const response = await request(baseURL).get(endpoints.contacts);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
});

describe("GET /search", () => {
  it(
    "return 200",
    async () => {
      const url = endpoints.search.replace(":name", "attiny13");
      const response = await request(baseURL).get(url);
      expect(response.statusCode).toBe(200);
    },
    60 * 1000
  );
});
