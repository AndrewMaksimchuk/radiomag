import type { Group } from "../../../dto/Group";
import type { WorkerProduct, TransferObject } from "./types";
import type { Product, StockItems, Description } from "../../../dto/Product";

let products: WorkerProduct[];
let dataFromGroup: Group;

const getDescription = (descriptionArray: Description) => {
  return descriptionArray.map((element, index) => {
    if (index === 0) return "";
    const description = dataFromGroup.descriptions_titles[element];
    return Array.isArray(description) ? "" : description.value;
  });
};

const getStock = (inStock: StockItems) => {
  type T = Required<StockItems[number]>;
  const predicate = (value: StockItems[number]): value is T =>
    value.stock !== undefined;
  return inStock.filter<T>(predicate).map((stockData) => {
    const stockNameId = stockData.stock_id;
    const allStockNames = dataFromGroup.stock_names;
    const stockName = stockNameId ? allStockNames[stockNameId] : "";
    return { stock: stockData.stock, stockName };
  });
};

const sumAllProductParameters = (product: Product): WorkerProduct => {
  const description = getDescription(product.description);
  const stock_data = getStock(product.stock_data.items).filter(
    (value) => value !== undefined
  );
  return { ...product, description, stock_data };
};

const main = (event: MessageEvent<TransferObject>) => {
  const { type, data } = event.data;

  if (type === "sum_all_product_description") {
    dataFromGroup = data;
    products = data.items.map(sumAllProductParameters);
    return postMessage({
      type: "return_sum_all_product_description",
      data: products,
    });
  }

  if (type === "apply_filters") {
    const keys = Object.keys(data);

    const filteredProducts = products.filter((product) => {
      const tmp = keys.map((key) => {
        const descriptionText = product.description.at(Number(key));
        if (descriptionText === undefined) return false;
        return data[key].includes(descriptionText);
      });
      return tmp.every((value) => value === true);
    });

    return postMessage({
      type: "return_sum_all_product_description",
      data: filteredProducts,
    });
  }

  if (type === "reset") {
    return postMessage({
      type: "return_sum_all_product_description",
      data: products,
    });
  }
};

onmessage = main;
