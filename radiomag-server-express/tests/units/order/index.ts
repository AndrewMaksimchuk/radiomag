import { describe } from "bun:test";
import { app } from "../app";
import { endpoints } from "../../../../endpoints/nodeEndpoints";
import { order } from "./mock";
import { itFormInvalid } from "./cases/itFormInvalid";
import { itFormValid } from "./cases/itFormValid";
import { itFormShipValid } from "./cases/itFormShipValid";
import { itErrorHandle } from "./cases/itErrorHandle";
import { itWithNewUser } from "./cases/itWithNewUser";
import { itWithWellKnownUser } from "./cases/itWithWellKnownUser";

describe("/order", () => {
  itFormInvalid(app, endpoints.order, order);
  itFormValid(app, endpoints.order, order);
  itFormShipValid(app, endpoints.order, order);
  itErrorHandle(app, endpoints.order);
  itWithNewUser(app, endpoints.order, order);
  itWithWellKnownUser(app, endpoints.order, order);
});
