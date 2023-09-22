import type { App } from "../../app";
import type { Order } from "../../../../../dto/Order";
import { expect, it } from "bun:test";

export const itFormInvalid = (app: App, endpoint: string, order: Order) => {
  it("POST return false, invalida default form data", async () => {
    const response = await app
      .post(endpoint)
      .send(order)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: false });
  });
};
