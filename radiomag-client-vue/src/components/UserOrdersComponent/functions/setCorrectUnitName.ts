import type { Orders } from "$/dto/Order";

const setFullName = (first: string, last: string) => {
  return first + " " + last;
};

export const setCorrectUnitName = (
  form: Orders[number]["form"],
  manager: Orders[number]["manager"]
) => {
  return undefined === manager
    ? form
    : { ...form, unit: setFullName(manager.firstName, manager.lastName) };
};
