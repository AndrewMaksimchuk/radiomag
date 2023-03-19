import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { catalogGroups } from "../database/tables/catalogGroups/model.js";

export const routerCatalogGroups = Router();

routerCatalogGroups.get(endpoints.catalogGroups, (req, res) => {
  const CatalogGroupsModel = new catalogGroups(req.dbConnection);

  CatalogGroupsModel.getByColumnName("key", req.params.id).then((data) =>
    res.json(data)
  );
});
