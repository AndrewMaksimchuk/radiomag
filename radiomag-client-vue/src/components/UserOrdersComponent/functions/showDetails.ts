import type { UseShowDetailsParams } from "./types";
import type { DialogComponent } from "./dialogComponent";
import { getOrder } from "./showDetailsGetOrder";
import { selectComponent } from "./showDetailsSelectComponent";

export const useShowDetails = (dialogProps: UseShowDetailsParams) => {
  const showDetails = (what: DialogComponent, id: number, title: string) => {
    const order = getOrder(id);

    if (undefined === order) {
      return "Show notification: order not found";
    }

    dialogProps.dialogTitle.value = title;

    selectComponent(dialogProps, what, order);
  };

  return {
    showDetails,
  };
};
