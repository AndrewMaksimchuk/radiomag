import type { FormData } from "../../dto/Order";
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

describe("/order", () => {
  const initFormData: FormData = {
    email: "",
    unit: "shop",
    subscriptions: "creditCard",
    typeOfDelivery: "selfPickup",
    city: "",
    address: "",
    recipient: "",
    contactPerson: "",
    telFax: "",
    comment: "",
  };

  it("POST return false, invalida default form data", async () => {
    const response = await request(baseURL)
      .post(endpoints.order)
      .send(initFormData)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: false });
  });

  it("POST return true, valide default form data", async () => {
    const data = {
      ...initFormData,
      email: "google@gmail.com",
      contactPerson: "Isaac Newton",
      telFax: "+Infinity",
    };
    const response = await request(baseURL)
      .post(endpoints.order)
      .send(data)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: true });
  });

  it("POST return true, valide ship form data", async () => {
    const data = {
      ...initFormData,
      email: "google@gmail.com",
      contactPerson: "Isaac Newton",
      telFax: "+Infinity",
      unit: "shop",
      subscriptions: "creditCard",
      typeOfDelivery: "urkPost",
      city: "Lviv",
      address: "#13",
      recipient: "Mick Mouse",
      comment: "",
    };

    const response = await request(baseURL)
      .post(endpoints.order)
      .send(data)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: true });
  });

  it("POST error handler", async () => {
    const response = await request(baseURL)
      .post(endpoints.error)
      .send({})
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({ ok: true });
  });
});
