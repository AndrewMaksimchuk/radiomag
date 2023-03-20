import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Contacts } from "../database/tables/contacts/model.js";

export const routerContacts = Router();

routerContacts.get(endpoints.contacts, (req, res) => {
  const sliderModel = new Contacts(req.dbConnection);
  sliderModel.all().then((data) => res.json(data));
});
