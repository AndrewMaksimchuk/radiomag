let products, dataFromGroup;
const getDescription = (e) =>
    e.map((r, t) => {
      if (t === 0) return "";
      const s = dataFromGroup.descriptions_titles[r];
      return Array.isArray(s) ? "" : s.value;
    }),
  getStock = (e) => {
    const r = (t) => t.stock !== void 0;
    return e.filter(r).map((t) => {
      const s = t.stock_id,
        c = dataFromGroup.stock_names,
        n = s ? c[s] : "";
      return { stock: t.stock, stockName: n };
    });
  },
  sumAllProductParameters = (e) => {
    const r = getDescription(e.description),
      t = getStock(e.stock_data.items).filter((s) => s !== void 0);
    return { ...e, description: r, stock_data: t };
  },
  main = (e) => {
    const { type: r, data: t } = e.data;
    if (r === "sum_all_product_description")
      return (
        (dataFromGroup = t),
        (products = t.items.map(sumAllProductParameters)),
        postMessage({
          type: "return_sum_all_product_description",
          data: products,
        })
      );
    if (r === "apply_filters") {
      const s = Object.keys(t),
        c = products.filter((n) =>
          s
            .map((o) => {
              const i = n.description.at(Number(o));
              return i === void 0 ? !1 : t[o].includes(i);
            })
            .every((o) => o === !0)
        );
      return postMessage({
        type: "return_sum_all_product_description",
        data: c,
      });
    }
    if (r === "reset")
      return postMessage({
        type: "return_sum_all_product_description",
        data: products,
      });
  };
onmessage = main;
