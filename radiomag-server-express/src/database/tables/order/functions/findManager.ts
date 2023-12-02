import type { ManagerTable } from "../../manager/type";
import type { OrderFormTableRow } from "../../orderForm/type";

export const findManager = (
  managers: ManagerTable[],
  formUnit: OrderFormTableRow["unit"]
) => {
  return managers.find((manager) => {
    return String(manager.id) === String(formUnit);
  });
};
