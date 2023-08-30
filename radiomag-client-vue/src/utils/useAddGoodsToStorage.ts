import type { WorkerProduct } from "@/public/types";
import { useRouter } from "vue-router";
import { useGoods } from "@/store/goods";
import { PingService } from "@/services/PingService";

interface Params {
  product: WorkerProduct;
  filterHeaders: string[];
}

export const useAddGoodsToStorage = ({ product, filterHeaders }: Params) => {
  const router = useRouter();
  const storeGoods = useGoods();

  storeGoods.add({
    product: product,
    filterHeaders: filterHeaders,
  });

  PingService.ping({
    action: "go to page",
    to: router.resolve({ name: "goods", params: { code: product.id } })
      .fullPath,
  });
};
