import type { Knex } from "knex";
import type { User } from "$/dto/User.js";
import { Cart } from "../../database/tables/cart/model.js";
import { OrderForm } from "../../database/tables/orderForm/model.js";
import { Order } from "../../database/tables/order/model.js";
import type { OrderRequestBody } from "$/dto/Order.js";

interface AddOrderToDatabaseParams {
  databaseConnection: Knex;
  body: OrderRequestBody;
  user: User | undefined;
}

export const addOrderToDatabase = async ({
  databaseConnection,
  body,
  user,
}: AddOrderToDatabaseParams) => {
  const cartTable = new Cart(databaseConnection);
  const orderFormTable = new OrderForm(databaseConnection);
  const orderTable = new Order(databaseConnection);

  const [{ id: cartId }] = await cartTable.add(body.cart);
  const [{ id: formId }] = await orderFormTable.add(body.form);

  const mixin = {
    created: body.created,
    cartId,
    formId,
  };

  const newOrder = user ? { userId: user.id } : { userId: body.user.id };

  const [{ id: orderId }] = await orderTable.add({
    closed: body.closed,
    status: body.status,
    ...newOrder,
    ...mixin,
  });

  return orderId;
};
