import type { App } from "../../app";
import type { Order } from "../../../../../dto/Order";
import { expect, it } from "bun:test";

export const itFormShipValid = (app: App, endpoint: string, order: Order) => {
  it("POST return true, valide ship form data", async () => {
    const form = {
      ...order.form,
      email: "google@gmail.com",
      contactPerson: "Isaac Newton",
      telFax: "+Infinity",
      unit: "shop",
      subscriptions: "creditCard",
      typeOfDelivery: "urkPost",
      city: "Lviv",
      address: "#13",
      recipient: "Mick Mouse",
      comment: "",
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
