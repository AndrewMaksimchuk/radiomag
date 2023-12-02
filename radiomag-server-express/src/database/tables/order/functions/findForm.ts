import type { OrderFormTableRow } from "../../orderForm/type";
import type { Orders } from "$/dto/Order";
import { EMPTY_ORDER_FORM } from "../constants";

export const findForm = (
  formData: OrderFormTableRow[],
  formId: Orders[0]["formId"]
) => {
  return (
    formData.find((formRow) => {
      return formRow.id === formId;
    }) ?? EMPTY_ORDER_FORM
  );
};
