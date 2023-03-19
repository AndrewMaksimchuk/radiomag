import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { catalogGroups } from "../database/tables/catalogGroups/model.js";

export const routerGroupName = Router();

routerGroupName.get(endpoints.groupName, (req, res) => {
  const CatalogGroupsModel = new catalogGroups(req.dbConnection);

  CatalogGroupsModel.getName(req.params.id).then((name) =>
    name ? res.json(name) : res.json({ error: "Group with that id not exist!" })
  );
});
