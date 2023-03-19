import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Slider } from "../database/tables/slider/model.js";

export const routerSlider = Router();

routerSlider.get(endpoints.slider, (req, res) => {
  const sliderModel = new Slider(req.dbConnection);
  sliderModel.all().then((data) => res.json(data));
});
