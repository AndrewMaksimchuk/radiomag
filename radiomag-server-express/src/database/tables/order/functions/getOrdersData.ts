import type { Orders } from "$/dto/Order";
import type { OrderFormTableRow } from "../../orderForm/type";
import type { ManagerTable } from "../../manager/type";
import { findForm } from "./findForm";
import { findManager } from "./findManager";

export const getOrdersData = (
  orders: Orders,
  formData: OrderFormTableRow[],
  managers: ManagerTable[]
) => {
  return orders.map((orderRow) => {
    const form = findForm(formData, orderRow.formId);
    const manager = findManager(managers, form.unit);
    return {
      ...orderRow,
      form,
      manager,
    };
  });
};
