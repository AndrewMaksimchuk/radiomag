import type { FormData } from "../../../dto/Order.js";
import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";

export const routerOrder = Router();

const shipValidation = (data: FormData) => {
  return Object.entries({ ...data, comment: true }).every(
    (item) => Boolean(item.at(1)) === true
  );
};

const defaultValidation = (data: FormData) => {
  const { email, typeOfDelivery, contactPerson, telFax } = data;
  return typeOfDelivery !== "selfPickup"
    ? shipValidation(data)
    : Boolean(email && contactPerson && telFax);
};

routerOrder.post(endpoints.order, (req, res) => {
  return defaultValidation(req.body)
    ? res.json({ ok: true })
    : res.json({ ok: false });
});
