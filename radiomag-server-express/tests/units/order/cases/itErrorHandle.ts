import type { App } from "../../app";
import { expect, it } from "bun:test";

export const itErrorHandle = (app: App, endpoint: string) => {
  it("POST error handler", async () => {
    const response = await app
      .post(endpoint)
      .send({})
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: false });
  });
};
