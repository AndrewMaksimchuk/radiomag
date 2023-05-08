import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";

export const routerError = Router();

routerError.post(endpoints.error, (req, res) => {
  const unknownObject = req.body;
  return unknownObject ? res.json({ ok: true }) : res.json({ ok: false });
});
