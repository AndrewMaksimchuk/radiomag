import type { MethodHandlerGetOrders } from "./type.js";
import { Order } from "../../database/tables/order/model.js";
import { OrderForm } from "@/database/tables/orderForm/model.js";
import { Manager } from "@/database/tables/manager/model.js";
import { RESPONSE } from "./constants.js";

export const getOrders: MethodHandlerGetOrders = async (req, res) => {
  try {
    if (undefined === req.dbConnection) {
      return res.json(RESPONSE.BAD_DATABASE);
    }

    const { userId } = req.body;

    if (undefined === userId) {
      // TODO: Change to validation user token
      return res.json(RESPONSE.BAD_USER);
    }

    const orderTable = new Order(
      req.dbConnection,
      new OrderForm(req.dbConnection),
      new Manager(req.dbConnection)
    );
    const orders = await orderTable.getAllByUser(userId);

    return res.json({
      ok: true,
      orders,
    });
  } catch (error) {
    return res.json(RESPONSE.BAD_ORDERS);
  }
};
