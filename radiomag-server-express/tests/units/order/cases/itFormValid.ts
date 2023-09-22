import type { App } from "../../app";
import type { Order } from "../../../../../dto/Order";
import { expect, it } from "bun:test";

export const itFormValid = (app: App, endpoint: string, order: Order) => {
  it("POST return true, valide default form data", async () => {
    const form = {
      ...order.form,
      email: "google@gmail.com",
      contactPerson: "Isaac Newton",
      telFax: "+Infinity",
    };

    const data = {
      ...order,
      form,
    };

    const response = await app
      .post(endpoint)
      .send(data)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: true });
  });
};
