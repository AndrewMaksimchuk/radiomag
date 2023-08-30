import type { WorkerProduct } from "@/public/types";

export const useTitleStock = (product: WorkerProduct) => {
  return (stockData: WorkerProduct["stock_data"]) => {
    return stockData.reduce((previous, current) => {
      const warhouse = `${current.stockName} - ${current.stock} ${product.pcs}`;
      return `${previous}\n${warhouse}`;
    }, "");
  };
};
