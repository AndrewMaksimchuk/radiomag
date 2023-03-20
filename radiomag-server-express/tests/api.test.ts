import dotenv from "dotenv";
import request from "supertest";
import { endpoints } from "../../endpoints/nodeEndpoints";
import catalogGroupsSeed from "../src/database/seeds/data/catalogGroups.json";

dotenv.config();

const port = process.env.PORT;
const baseURL = `http://localhost:${port}`;

const tobe200 = (url: string) => {
  it("return 200", async () => {
    const response = await request(baseURL).get(url);
    expect(response.statusCode).toBe(200);
  });
};

const tobejson = (url: string) => {
  it("'content-type' is 'application/json'", async () => {
    const response = await request(baseURL).get(url);
    expect(response.headers["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
};

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
