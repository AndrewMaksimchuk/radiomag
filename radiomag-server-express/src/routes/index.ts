import { Router } from "express";
import { routerGroup } from "./group.js";
import { routerSearch } from "./search.js";
import { routerCatalog } from "./catalog.js";
import { routerCatalogGroups } from "./catalogGroups.js";
import { routerGroupName } from "./groupName.js";
import { routerSlider } from "./slider.js";
import { routerContacts } from "./contacts.js";
import { routerOrder } from "./order.js";

export const router = Router();

router.use(routerGroup);
router.use(routerSearch);
router.use(routerCatalog);
router.use(routerCatalogGroups);
router.use(routerGroupName);
router.use(routerSlider);
router.use(routerContacts);
router.use(routerOrder);
