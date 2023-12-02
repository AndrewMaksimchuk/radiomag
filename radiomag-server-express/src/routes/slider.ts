import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Slider } from "../database/tables/slider/model.js";
import { redisSetWithEx } from "../services/redis.js";

export const routerSlider = Router();

routerSlider.get(endpoints.slider, async (req, res) => {
  const sliderModel = new Slider(req.dbConnection);
  const data = await sliderModel.all();

  if (data.length) {
    await redisSetWithEx(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
