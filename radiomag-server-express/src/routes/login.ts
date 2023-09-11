import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { User } from "../database/tables/user/model.js";
import { validator } from "../services/validator/index.js";
import { verifyPassword } from "../services/password/index.js";

export const routerLogin = Router();

routerLogin.post(endpoints.login, async (req, res) => {
  const { password, phone, name } = req.body;
  const isValidPhone = validator.phone(phone);
  const isValidPassword = validator.password(password);
  const isValidName = validator.name(name);

  if (false === isValidPhone || false === isValidPassword) {
    return res.json({
      ok: false,
      message: "Field not valid",
    });
  }

  const userModel = new User(req.dbConnection);
  let userData = await userModel.get(phone);

  if (undefined === userData) {
    if (false === isValidName) {
      return res.json({
        ok: false,
        message: "Account not found",
      });
    }

    userData = await userModel.create({
      name,
      password,
      phone,
    });
  }

  if (undefined === userData) {
    return res.json({
      ok: false,
      message: "Unable to create user",
    });
  }

  if (false === verifyPassword(password, userData.password)) {
    return res.json({
      ok: false,
      message: "Unable to log in",
    });
  }

  Reflect.deleteProperty(userData, "password");

  res.json(userData);
});
