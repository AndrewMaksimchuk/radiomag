import request from "supertest";
import { endpoints } from "../../endpoints/nodeEndpoints";

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
