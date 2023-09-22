import type { MethodHandler } from "./type.js";
import { Cart } from "../../database/tables/cart/model.js";
import { OrderForm } from "../../database/tables/orderForm/model.js";
import { Order } from "../../database/tables/order/model.js";
import { defaultValidation } from "./defaultValidation.js";
import { Role } from "../../../../dto/Role.js";
import { createNewUnregistrationUser } from "./createNewUnregistrationUser.js";

export const newOrder: MethodHandler = async (req, res) => {
  try {
    const cartTable = new Cart(req.dbConnection);
    const orderFormTable = new OrderForm(req.dbConnection);
    const orderTable = new Order(req.dbConnection);

    if (false === defaultValidation(req.body.form)) {
      return res.json({ ok: false, message: "Bad form data" });
    }

    const newUser = await createNewUnregistrationUser(
      Role.guest === req.body.user.role,
      req
    );

    const [{ id: cartId }] = await cartTable.add(req.body.cart);
    const [{ id: formId }] = await orderFormTable.add(req.body.form);

    const mixin = {
      created: req.body.created,
      cartId,
      formId,
    };

    const newOrder = newUser
      ? { userId: newUser.id }
      : { userId: req.body.user.id };

    const [{ id: orderId }] = await orderTable.add({ ...newOrder, ...mixin });

    return newUser
      ? res.json({ ok: true, orderId, newUser })
      : res.json({ ok: true, orderId });
  } catch (error) {
    return res.json({
      ok: false,
      message: "Error - can`t save order",
    });
  }
};
