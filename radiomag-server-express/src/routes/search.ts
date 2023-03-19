import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";

export const routerSearch = Router();

routerSearch.get(endpoints.search, (req, res) => {
  const url = `https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=search&query=${req.params.name}`;
  return res.json({ url });
});
