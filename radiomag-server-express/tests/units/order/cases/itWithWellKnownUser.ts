import type { App } from "../../app";
import type { Order } from "../../../../../dto/Order";
import { expect, it } from "bun:test";
import { user } from "../mock";
import { Role } from "../../../../../dto/Role";
export const itWithWellKnownUser = (
  app: App,
  endpoint: string,
  order: Order
) => {
  it("POST return order for well known user", async () => {
    const form = {
      ...order.form,
      email: "google@gmail.com",
      contactPerson: "Isaac Newton",
      telFax: "+11111111111",
    };

    const data = {
      ...order,
      form,
      user: {
        ...user,
        role: Role.client,
      },
    };

    const response = await app
      .post(endpoint)
      .send(data)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body.orderId).toBeGreaterThan(0);
    expect(response.body.newUser).toBeFalsy();
  });
};
