import type { MethodHandlerGetOrders } from "./type.js";
import { Order } from "../../database/tables/order/model.js";

export const getOrders: MethodHandlerGetOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    if (undefined === userId) {
      // TODO: Change to validation user token
      return res.json({
        ok: false,
        message: "Invalid user id",
      });
    }

    const orderTable = new Order(req.dbConnection);
    const orders = await orderTable.getAllByUser(userId);

    return res.json({
      ok: true,
      orders,
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: "Error - can`t get orders",
    });
  }
};
