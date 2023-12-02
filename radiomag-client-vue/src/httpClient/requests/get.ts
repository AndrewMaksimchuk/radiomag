import type { Slider } from "$/dto/Slider";
import type { Catalog } from "$/dto/Catalog";
import type { Group } from "$/dto/Group";
import type { Contacts } from "$/dto/Contacts";
import type { Shops } from "$/dto/Shop";
import type { Managers } from "$/dto/Manager";
import { HTTPget } from "../../../../endpoints";
import GETdata from "../methods/GET";

export const GET = {
  catalog: () => {
    return GETdata<Catalog>(HTTPget.catalog);
  },

  catalogGroups: (id: number) => {
    return GETdata<Catalog>(HTTPget.catalogGroups(id));
  },

  slider: () => {
    return GETdata<Slider>(HTTPget.slider);
  },

  group: (id: number | string) => {
    return GETdata<Group>(HTTPget.group(id));
  },

  groupName: (id: number | string) => {
    return GETdata<string>(HTTPget.groupName(id));
  },

  contacts: () => {
    return GETdata<Contacts>(HTTPget.contacts);
  },

  shops: () => {
    return GETdata<Shops>(HTTPget.shop);
  },

  managers: () => {
    return GETdata<Managers>(HTTPget.manager);
  },
};
