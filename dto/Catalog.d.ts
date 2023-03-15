export interface CatalogItem {
  id: number;
  img: string;
  name: string;
}

export type Catalog = CatalogItem[];

export type CatalogGroups = Record<string, CatalogItem[]>;
