import type { WorkerProduct } from "./Product";

export interface CartItem {
  product: WorkerProduct;
  quantity: number;
}

export type Cart = {
  items: CartItem[];
  totalCost: string | null;
};
