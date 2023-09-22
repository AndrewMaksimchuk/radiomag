import { app } from "./app";
import { it, expect } from "bun:test";

export const tobe200 = (url: string) => {
  it("return 200", async () => {
    const response = await app.get(url);
    expect(response.statusCode).toBe(200);
  });
};

export const tobejson = (url: string) => {
  it("'content-type' is 'application/json'", async () => {
    const response = await app.get(url);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
};
