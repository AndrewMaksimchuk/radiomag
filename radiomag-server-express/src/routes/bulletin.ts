import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Bulletin } from "../database/tables/bulletin/model.js";
import { validator } from "../services/validator/index.js";

export const routerBulletin = Router();

routerBulletin.post(endpoints.bulletin, async (req, res) => {
  const { email } = req.body;
  const isValidEmail = validator.email(email);

  if (false === isValidEmail) {
    return res.json({ ok: false });
  }

  const bulletinModel = new Bulletin(req.dbConnection);
  await bulletinModel.insert(email);
  return res.json({ ok: true });
});

routerBulletin.get(endpoints.bulletin, async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.json({ ok: false });
  }

  const bulletinModel = new Bulletin(req.dbConnection);
  await bulletinModel.del(id);
  return res.json({ ok: true });
});
