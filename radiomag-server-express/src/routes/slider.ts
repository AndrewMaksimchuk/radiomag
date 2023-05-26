import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Slider } from "../database/tables/slider/model.js";
import { redisClient } from "../services/redis.js";

export const routerSlider = Router();

routerSlider.get(endpoints.slider, async (req, res) => {
  const sliderModel = new Slider(req.dbConnection);
  const data = await sliderModel.all();

  if (data.length) {
    await redisClient.set(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
