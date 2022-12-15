export type TransferObject =
  | {
      type: "sum_all_product_description";
      data: Group;
    }
  | {
      type: "return_sum_all_product_description";
      data: WorkerProduct[];
    };

export interface WorkerProduct extends Omit<Product, "stock_data"> {
  description: string[];
  stock_data: {
    stock: string;
    stockName: string;
  }[];
}
