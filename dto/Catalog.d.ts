interface CatalogItem {
  id: number;
  img: string;
  name: string;
}

type Catalog = CatalogItem[];

type CatalogGroups = Record<
  string,
  CatalogItem[],
>;
