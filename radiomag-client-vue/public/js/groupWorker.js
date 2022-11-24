var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products;
var dataFromGroupComponent;
var getDescription = function (descriptionArray) {
    return descriptionArray.map(function (element, index) {
        if (index === 0)
            return element;
        return dataFromGroupComponent.descriptions_titles[element].value;
    });
};
var getStock = function (inStock) {
    return inStock.map(function (stockData) {
        var stockNameId = stockData.stock_id;
        var allStockNames = dataFromGroupComponent.stock_names;
        var stockName = stockNameId ? allStockNames[stockNameId] : "";
        return { stock: stockData.stock, stockName: stockName };
    });
};
var sumAllProductParameters = function (product) {
    var description = getDescription(product.description);
    var stock_data = getStock(product.stock_data.items);
    return __assign(__assign({}, product), { description: description, stock_data: stock_data });
};
var sumProductDescription = function (event) {
    var _a = event.data, type = _a.type, data = _a.data;
    if (type === 'sum_all_product_description') {
        dataFromGroupComponent = data;
        products = data.items.map(sumAllProductParameters);
        postMessage({ type: 'return_sum_all_product_description', data: products });
    }
};
onmessage = sumProductDescription;
