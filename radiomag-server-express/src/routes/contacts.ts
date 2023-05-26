import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Contacts } from "../database/tables/contacts/model.js";
import { redisClient } from "../services/redis.js";

export const routerContacts = Router();

routerContacts.get(endpoints.contacts, async (req, res) => {
  const sliderModel = new Contacts(req.dbConnection);
  const data = await sliderModel.all();

  if (data.length) {
    await redisClient.set(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
