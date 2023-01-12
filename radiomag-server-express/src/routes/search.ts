/// <reference lib="dom" />

import puppeteer from "puppeteer";

const isDevLocal = process.env.NODE_ENV !== "dev";

const parser = (selectorTable: string) => {
  const table =
    document.querySelector<HTMLTableElement>(selectorTable)?.firstElementChild
      ?.children;
  if (table === undefined) return [];

  const tableRows = Array.from(table).slice(1) as HTMLTableRowElement[];
  const notEmpty = tableRows.filter((element) =>
    Array.from(element?.children)
      .at(1)
      ?.textContent?.trim()
      ?.includes("Код товару:")
  );

  const goods = notEmpty.map((element) => {
    const children = Array.from(element?.children) as HTMLTableCellElement[];

    const child_0 = children.at(0);
    const child_1 = children.at(1);
    const child_5 = children.at(5);
    const child_6 = children.at(6);

    const id = parseInt(
      child_1?.lastChild?.textContent?.trim()?.split(":")?.at(-1)?.trim() || ""
    );
    const articul = child_1?.firstElementChild?.textContent || "";
    const url = child_0?.firstElementChild?.getAttribute("href") || "";
    const description = children.at(4)?.innerText?.split("\n")?.slice(1);
    const image =
      child_0?.firstElementChild?.firstElementChild?.getAttribute("src") || "";
    const remaining_images_qty = 0;
    const datasheet_link_data = "";
    const extended_description = false;
    const pcs = "шт";
    const total_stock = "";

    const pricesElem = Array.from(
      child_6?.firstElementChild?.firstElementChild?.children || []
    ).map((element) => {
      const [quentity, price] = Array.from(element.children);
      const q = parseInt(quentity?.textContent?.split("+").at(0) ?? "0");
      const p = parseFloat(price.textContent ?? "0");
      return { q, p, disabled: false };
    });
    const prices = pricesElem || [{ q: 0, p: 0, disabled: false }];

    const moq = null;
    const google_category_id = "";
    const initialPosition = 0;
    const product_analogs_types = null;
    const total = 0;
    const stock_data = child_5?.innerText
      ?.split("\n")
      .slice(1)
      .map((element) => {
        const [stockQuantity, stockName] = element?.split(" - ") ?? [];
        const stock = parseInt(stockQuantity) || 0;
        return { stock, stockName };
      });
    const waiting_date_items = "";
    const waiting_total = 0;

    description?.unshift(articul);

    return {
      id,
      articul,
      url,
      description,
      image,
      remaining_images_qty,
      datasheet_link_data,
      extended_description,
      pcs,
      total_stock,
      prices,
      moq,
      google_category_id,
      initialPosition,
      product_analogs_types,
      total,
      stock_data,
      waiting_date_items,
      waiting_total,
    };
  });

  return goods;
};

export const search = async (url: string) => {
  if (Boolean(url) === false) return {};

  const browser = await puppeteer.launch({
    headless: isDevLocal,
    devtools: isDevLocal,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  page.setViewport({
    width: 1366,
    height: 741,
  });
  page.setDefaultTimeout(1000 * 60);
  page.setDefaultNavigationTimeout(1000 * 60);
  await page.goto(url);

  const selectorTable = ".productlist-table";
  await page.waitForSelector(selectorTable);

  const selectorButtonShowAll =
    "#main_view > div > div.panel-body > div:nth-child(2) > div.productlist_view > table > tbody > tr:nth-child(1) > th:nth-child(6) > div > button";
  await page.click(selectorButtonShowAll);

  const table = await page.evaluate(parser, selectorTable);

  await browser.close();

  return table;
};
