import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.ts";
import { getAllGroupInfo } from "../services/getAllGroupData.ts";
import {
  type CatalogGroupsItem,
  type CatalogGroup,
  catalogGroups,
} from "../database/catalogGroups.ts";
import { contacts } from "../database/contacts.ts";
import { catalog } from "../database/catalog.ts";
import { slider } from "../database/slider.ts";
import { search } from "./search.ts";

type Cache = Record<string, object>;

export const router = Router();
const cache: Cache = {};

router.get(endpoints.group, async (req, res) => {
  const { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (cache[id]) {
    console.log("Data from cache!");
    const fromCache = cache[id];
    return res.json(fromCache);
  }

  const data = await getAllGroupInfo(id);
  cache[id] = data;
  console.log("Data from request!");
  return res.json(data);
});

router.get(endpoints.search, async (req, res) => {
  const url = `https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=search&query=${req.params.name}`;
  const finded = await search(url);
  return res.json(finded);
});

router.get(endpoints.catalog, (req, res) => res.json(catalog));

router.get(endpoints.catalogGroups, (req, res) =>
  res.json(catalogGroups[req.params.id])
);

router.get(endpoints.groupName, (req, res) => {
  const groups = Object.entries<CatalogGroupsItem>(catalogGroups)
    .map((catalog) => catalog[1])
    .flat() as CatalogGroup[];
  const group = groups.find((group) => String(group.id) === req.params.id);
  return group
    ? res.json(group.name)
    : res.json({ error: "Group with that id not exist!" });
});

router.get(endpoints.slider, (req, res) => res.json(slider));

router.get(endpoints.contacts, (req, res) => res.json(contacts));
