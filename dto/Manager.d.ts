import type { ManagerTable } from "$/radiomag-server-express/src/database/tables/manager/type";
import type { ShopModel } from "$/radiomag-server-express/src/database/tables/shop/type";
import type { Prettify } from "$/utiliti-types";

export type Manager = Prettify<ManagerTable>;
export type ManagerWithShop = Prettify<ManagerTable & ShopModel>;
export type Managers = Manager[] | [];
