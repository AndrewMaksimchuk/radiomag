import type { FormData } from "$/dto/Order";
import { User } from "../../database/tables/user/model.js";
import { Knex } from "knex";

interface CreateNewUnregistrationUserParams {
  databaseConnection: Knex;
  condition: boolean;
  form: FormData;
}

export const createNewUnregistrationUser = async ({
  databaseConnection,
  condition,
  form,
}: CreateNewUnregistrationUserParams) => {
  if (false === condition) {
    return;
  }

  const userTable = new User(databaseConnection);
  return await userTable.create({
    name: form.contactPerson,
    phone: form.telFax,
    password: "",
  });
};
