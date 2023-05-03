import type { Slider } from "../../../../dto/Slider";
import type { Catalog } from "../../../../dto/Catalog";
import type { Group } from "../../../../dto/Group";
import type { Contacts } from "../../../../dto/Contacts";
import { HTTPget } from "../../../../endpoints";
import GETdata from "../methods/GET";

export const GET = {
  catalog: async () => GETdata<Catalog>(HTTPget.catalog),

  catalogGroups: async (id: number) =>
    GETdata<Catalog>(HTTPget.catalogGroups(id)),

  slider: async () => GETdata<Slider>(HTTPget.slider),

  group: async (id: number | string) => GETdata<Group>(HTTPget.group(id)),

  groupName: async (id: number | string) =>
    GETdata<string>(HTTPget.groupName(id)),

  contacts: async () => GETdata<Contacts>(HTTPget.contacts),
};