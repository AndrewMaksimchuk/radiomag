import type { Knex } from "knex";
import type { CatalogItem } from "../../../dto/Catalog";
import type { SliderItem } from "../../../dto/Slider";
import type { IOriginGroups } from "./tables/originGroups/type";
import type { User } from "../../../dto/User";
import type { PingModel } from "./tables/ping/type";

export interface CatalogGroups extends CatalogItem {
  key: number;
}

export interface Contacts {
  data: string;
}

declare module "knex/types/tables" {
  export interface Tables {
    catalog: CatalogItem;
    catalog_composite: Knex.CompositeTableType<CatalogItem>;

    catalogGroups: CatalogGroups;
    catalogGroups_composite: Knex.CompositeTableType<CatalogGroups>;

    contacts: Contacts;
    contacts_composite: Knex.CompositeTableType<Contacts>;

    slider: SliderItem;
    slider_composite: Knex.CompositeTableType<SliderItem>;

    originGroups: IOriginGroups;
    originGroups_composite: Knex.CompositeTableType<IOriginGroups>;

    user: User;
    user_composite: Knex.CompositeTableType<User>;

    ping: PingModel;
    ping_composite: Knex.CompositeTableType<PingModel>;
  }
}
