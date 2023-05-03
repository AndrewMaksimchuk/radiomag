export type Description = Array<string | number>;

interface PriceItem {
  q: number;
  p: number;
  disabled: boolean;
}

type Price = PriceItem[];

export type StockItems = {
  stock?: string;
  stock_wait?: string;
  stock_id?: string | number;
}[];

interface Stock {
  items: StockItems;
  totals: {
    in_stock: number;
    wait: number;
  };
}

type WaitingItem = {
  qty: string;
  date: string;
}[];

type WaitingDataItems = WaitingItem | [] | null;

export interface Product {
  id: number;
  articul: string;
  url: string;
  description: Description;
  image: string;
  remaining_images_qty: number;
  datasheet_link_data: string;
  extended_description: boolean;
  pcs: string;
  total_stock: number | string;
  prices: Price;
  moq?: null | number;
  google_category_id: string;
  initialPosition: number;
  product_analogs_types: string[] | null;
  total: number;
  stock_data: Stock;
  waiting_date_items: WaitingDataItems;
  waiting_total: number;
}
