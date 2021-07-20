postMessage('Worker is created!');

let products = []; // Array of prepared data for reuse
let dataFromGroupComponent = {};

// function putToProductsArray(element) {
//   products.push(element);
// }

function getDescription(descriptionArray) {
  function throughArray(element, index) {
    if (index === 0) return element;
    const descriptionValue = dataFromGroupComponent.descriptions_titles[element].value;
    return descriptionValue;
  }
  return descriptionArray.map(throughArray);
}

// function getPrices(prices) {
//   return ;
// }

function getStock(inStock) {
  function getStockName(stockData) {
    const stockNameId = stockData.stock_id;
    const allStockNames = dataFromGroupComponent.stock_names;
    const stockName = allStockNames[stockNameId];
    return { stock: stockData.stock, stockName };
  }
  return inStock.map(getStockName);
}

function sumAllProductParameters(product) {
  product.description = getDescription(product.description);
  // product.prices = getPrices(product.prices);
  product.stock_data = getStock(product.stock_data.items);
  return product;
}

onmessage = function sumProductDescription(e) {
  const { typeOfWork, data } = e.data;
  dataFromGroupComponent = data;

  if (typeOfWork === 'sum_all_product_description') {
    products = data.items.map(sumAllProductParameters);
    postMessage({ typeOfWork: 'return_sum_all_product_description', data: products });
  }

  // postMessage({ typeOfWork, data });
  // postMessage(e.data);
}
