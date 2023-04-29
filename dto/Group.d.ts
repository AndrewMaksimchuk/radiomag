import type { Product } from "./Product";

interface AnalogsTypesDataItem {
  title: string;
  color: string;
}

type AnalogsTypesData = Record<string, AnalogsTypesDataItem>;

interface ColumnHeaders {
  image: string;
  articul: string;
  pdf: string;
  nalichie: string;
  price: string;
  addqty: string;
  product_descriptions: Record<string, string> | string[];
  sort_by: string;
}

type DescriptionsTitles = Record<
  string,
  { value: string; ordering_position: number } | null[]
>;

export type FiltersItems = { title: number; qty: number }[][];
export type FiltersItemsMod = { title: string; qty: number }[][];

type Filters = [] | FiltersItems;

type initialUniqueFilters = Record<string, Record<string, number>>;

type initialWarehouseFilters = { title_id: number; qty: number }[];

type Items = Product[];

interface MultilangConstants {
  item_id_label: string;
  no_items_founded: string;
  show_items: string;
  cancel_filters: string;
  show_all_items: string;
  full_catalog_version: string;
  to_card: string;
  coming_soon: string;
  by_default: string;
  sort_by: string;
  in_stock: string;
  expand: string;
  hide: string;
  stocks_waiting: string;
  all: string;
  description: string;
  manufacturer: string;
  category: string;
  price_via_cart: string;
}

type ProductClasses = Record<string, string>;

type StockNames = Record<string, string>;

type StocksSids = Record<string, number>;

export interface Group {
  analogs_types_data: AnalogsTypesData;
  column_headers: ColumnHeaders;
  currency: string;
  currentLang: string;
  descriptions_titles: DescriptionsTitles;
  filters: Filters;
  initialUniqueFilters: initialUniqueFilters;
  initialWarehouseFilters: initialWarehouseFilters;
  is_admin: number;
  items: Items;
  multilang_constants: MultilangConstants;
  productClasses: ProductClasses;
  stock_names: StockNames;
  stocks_sids: StocksSids;
}
