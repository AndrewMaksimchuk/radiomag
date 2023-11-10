import type { WorkerProduct } from "../../../dto/Product";
import type { Group } from "../../../dto/Group";
import type { AllSearchParams } from "../store/filters";

export type TransferObject =
  | {
      type: "sum_all_product_description";
      data: Group;
    }
  | {
      type: "return_sum_all_product_description";
      data: WorkerProduct[];
    }
  | {
      type: "apply_filters";
      data: AllSearchParams;
    }
  | {
      type: "reset";
      data: undefined;
    };
