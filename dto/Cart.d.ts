import type { WorkerProduct } from "$/radiomag-client-vue/src/public/types";

export interface CartItem {
  product: WorkerProduct;
  quantity: number;
}

export type Cart = {
  items: CartItem[];
  totalCost: string;
};
