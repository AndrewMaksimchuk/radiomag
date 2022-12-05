let products, dataFromGroupComponent;
const getDescription = (t) =>
    t.map((s, o) =>
      o === 0 ? s : dataFromGroupComponent.descriptions_titles[s].value
    ),
  getStock = (t) =>
    t.map((s) => {
      const o = s.stock_id,
        e = dataFromGroupComponent.stock_names,
        r = o ? e[o] : "";
      return { stock: s.stock, stockName: r };
    }),
  sumAllProductParameters = (t) => {
    const s = getDescription(t.description),
      o = getStock(t.stock_data.items);
    return { ...t, description: s, stock_data: o };
  },
  sumProductDescription = (t) => {
    const { type: s, data: o } = t.data;
    s === "sum_all_product_description" &&
      ((dataFromGroupComponent = o),
      (products = o.items.map(sumAllProductParameters)),
      postMessage({
        type: "return_sum_all_product_description",
        data: products,
      }));
  };
onmessage = sumProductDescription;
