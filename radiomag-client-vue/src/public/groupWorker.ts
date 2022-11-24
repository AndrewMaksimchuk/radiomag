let products;
let dataFromGroupComponent: Group;

const getDescription = (descriptionArray: Description) => {
  return descriptionArray.map((element, index) => {
    if (index === 0) return element;
    return dataFromGroupComponent.descriptions_titles[element].value;
  });
}

const getStock = (inStock: StockItems) => {
  return inStock.map((stockData) => {
    const stockNameId = stockData.stock_id;
    const allStockNames = dataFromGroupComponent.stock_names;
    const stockName = stockNameId ? allStockNames[stockNameId] : "";
    return { stock: stockData.stock, stockName };
  });
}

const sumAllProductParameters = (product: Product): WorkerProduct => {
  const description = getDescription(product.description);
  const stock_data = getStock(product.stock_data.items);
  return {...product, description, stock_data };
}

const sumProductDescription = (event: MessageEvent<TransferObject>) => {
  const { type, data } = event.data;
  
  if (type === 'sum_all_product_description') {
    dataFromGroupComponent = data;
    products = data.items.map(sumAllProductParameters);
    postMessage({ type: 'return_sum_all_product_description', data: products });
  }
}

onmessage = sumProductDescription;
