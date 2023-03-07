let products, dataFromGroup;
const getDescription = (r) =>
    r.map((t, e) => (e === 0 ? t : dataFromGroup.descriptions_titles[t].value)),
  getStock = (r) =>
    r.map((t) => {
      const e = t.stock_id,
        o = dataFromGroup.stock_names,
        c = e ? o[e] : "";
      return { stock: t.stock, stockName: c };
    }),
  sumAllProductParameters = (r) => {
    const t = getDescription(r.description),
      e = getStock(r.stock_data.items);
    return { ...r, description: t, stock_data: e };
  },
  main = (r) => {
    const { type: t, data: e } = r.data;
    if (t === "sum_all_product_description")
      return (
        (dataFromGroup = e),
        (products = e.items.map(sumAllProductParameters)),
        postMessage({
          type: "return_sum_all_product_description",
          data: products,
        })
      );
    if (t === "apply_filters") {
      const o = Object.keys(e),
        c = products.filter((i) =>
          o
            .map((s) => {
              const n = i.description.at(Number(s));
              return n === void 0 ? !1 : e[s].includes(n);
            })
            .every((s) => s === !0)
        );
      return postMessage({
        type: "return_sum_all_product_description",
        data: c,
      });
    }
    if (t === "reset")
      return postMessage({
        type: "return_sum_all_product_description",
        data: products,
      });
  };
onmessage = main;
