import type { WorkerProduct } from "$/dto/Product";

export const setTitleStock = (
  stockData: WorkerProduct["stock_data"],
  pcs: string
) => {
  return stockData.reduce((previous, current) => {
    const warhouse = `${current.stockName} - ${current.stock} ${pcs}`;
    return `${previous}\n${warhouse}`;
  }, "");
};
