/* eslint-disable */
import { describe } from "bun:test";
import { endpoints } from "../../endpoints/nodeEndpoints";
import catalogGroupsSeed from "../src/database/seeds/data/catalogGroups.json";
import { tobe200, tobejson } from "./units/tobe";
import "./units/order";

describe("GET /catalog", () => {
  tobe200(endpoints.catalog);
  tobejson(endpoints.catalog);
});

describe("GET /catalogGroups", () => {
  const index = Math.floor(Math.random() * (catalogGroupsSeed.length + 1));
  const defaultId = 1;
  const id = String(catalogGroupsSeed.at(index)?.key ?? defaultId);
  const url = endpoints.catalogGroups.replace(":id", id);
  tobe200(url);
  tobejson(url);
});

describe("GET /contacts", () => {
  tobe200(endpoints.contacts);
  tobejson(endpoints.contacts);
});

describe("GET /group", () => {
  const index = Math.floor(Math.random() * (catalogGroupsSeed.length + 1));
  const defaultId = 377;
  const id = String(catalogGroupsSeed.at(index)?.id ?? defaultId);
  const url = endpoints.group.replace(":id", id);
  tobe200(url);
  tobejson(url);
});

describe("GET /groupName", () => {
  const index = Math.floor(Math.random() * (catalogGroupsSeed.length + 1));
  const defaultId = 377;
  const id = String(catalogGroupsSeed.at(index)?.id ?? defaultId);
  const url = endpoints.groupName.replace(":id", id);
  tobe200(url);
  tobejson(url);
});

describe("GET /search", () => {
  const name = "100uf";
  const url = endpoints.search.replace(":name", name);
  tobe200(url);
  tobejson(url);
});

describe("GET /slider", () => {
  tobe200(endpoints.slider);
  tobejson(endpoints.slider);
});

describe("GET /manager", () => {
  tobe200(endpoints.manager);
  tobejson(endpoints.manager);
});

describe("GET /shop", () => {
  tobe200(endpoints.shop);
  tobejson(endpoints.shop);
});
