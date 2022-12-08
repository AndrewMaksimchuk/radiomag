import { HTTPget } from "../../../endpoints";
import GETdata from "./GET";

export const GET = {
  catalog: async () => GETdata<Catalog>(HTTPget.catalog),
  catalogGroups: async (id: number) =>
    GETdata<Catalog>(HTTPget.catalogGroups(id)),
  slider: async () => GETdata<Slider>(HTTPget.slider),
  group: async (id: number | string) => GETdata<Group>(HTTPget.group(id)),
  groupName: async (id: number | string) =>
    GETdata<string>(HTTPget.groupName(id)),
  contacts: async () => GETdata<string>(HTTPget.contacts),
};
