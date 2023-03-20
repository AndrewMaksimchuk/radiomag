import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Catalog } from "../database/tables/catalog/model.js";

export const routerCatalog = Router();

routerCatalog.get(endpoints.catalog, (req, res) => {
  const sliderModel = new Catalog(req.dbConnection);
  sliderModel.all().then((data) => res.json(data));
});
