import { Router } from "express";
import { routerGroup } from "./group.js";
import { routerSearch } from "./search.js";
import { routerCatalog } from "./catalog.js";
import { routerCatalogGroups } from "./catalogGroups.js";
import { routerGroupName } from "./groupName.js";
import { routerSlider } from "./slider.js";
import { routerContacts } from "./contacts.js";
import { routerOrder } from "./order.js";
import { routerError } from "./error.js";
import { routerPing } from "./ping.js";

export const router = Router();

const routes = [
  routerGroup,
  routerSearch,
  routerCatalog,
  routerCatalogGroups,
  routerGroupName,
  routerSlider,
  routerContacts,
  routerOrder,
  routerError,
  routerPing,
];

routes.forEach((route) => router.use(route));