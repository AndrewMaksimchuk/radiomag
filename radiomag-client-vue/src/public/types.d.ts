import type { Product } from "../../../dto/Product";
import type { Group } from "../../../dto/Group";
import type { AllSearchParams } from "../store/filters";

export interface WorkerProduct extends Omit<Product, "stock_data"> {
  description: string[];
  stock_data: {
    stock: string;
    stockName: string;
  }[];
}

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
