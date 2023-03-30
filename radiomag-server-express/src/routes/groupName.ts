import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { catalogGroups } from "../database/tables/catalogGroups/model.js";

export const routerGroupName = Router();

routerGroupName.get(endpoints.groupName, (req, res) => {
  const CatalogGroupsModel = new catalogGroups(req.dbConnection);

  CatalogGroupsModel.getName(req.params.id).then((name) => {
    if (!name.length) {
      return res.json({ error: "Group with that id not exist!" });
    }

    const [row] = name;
    return res.json(row.name);
  });
});
