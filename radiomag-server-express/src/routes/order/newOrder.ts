import type { MethodHandlerCreateOrder } from "./type.js";
import { defaultValidation } from "./defaultValidation.js";
import { Role } from "../../../../dto/Role.js";
import { createNewUnregistrationUser } from "./createNewUnregistrationUser.js";
import { addOrderToDatabase } from "./addOrderToDatabase.js";
import { RESPONSE } from "./constants.js";

export const newOrder: MethodHandlerCreateOrder = async (req, res) => {
  try {
    if (undefined === req.dbConnection) {
      return res.json(RESPONSE.ERROR);
    }

    if (undefined === req.body.form) {
      return res.json(RESPONSE.FORM_NOT_PROVIDED);
    }

    if (false === defaultValidation(req.body.form)) {
      return res.json(RESPONSE.BAD_FORM);
    }

    if (undefined === req.body.cart) {
      return res.json(RESPONSE.CART_NOT_PROVIDED);
    }

    if (undefined === req.body.user) {
      return res.json(RESPONSE.USER_NOT_PROVIDED);
    }

    const user = await createNewUnregistrationUser({
      databaseConnection: req.dbConnection,
      condition: Role.guest === req.body.user.role,
      form: req.body.form,
    });

    const orderId = await addOrderToDatabase({
      databaseConnection: req.dbConnection,
      body: req.body,
      user,
    });

    return user
      ? res.json({ ok: true, orderId, newUser: user })
      : res.json({ ok: true, orderId });
  } catch (error) {
    return res.json(RESPONSE.ERROR);
  }
};
