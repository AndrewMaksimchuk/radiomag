import type { MethodHandler } from "./type";
import { User } from "../../database/tables/user/model.js";

export const createNewUnregistrationUser = async (
  condition: boolean,
  req: Parameters<MethodHandler>[0]
) => {
  if (false === condition) {
    return;
  }

  const userTable = new User(req.dbConnection);
  return await userTable.create({
    name: req.body.form.contactPerson,
    phone: req.body.form.telFax,
    password: "",
  });
};
