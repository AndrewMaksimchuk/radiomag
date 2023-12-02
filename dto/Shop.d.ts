import type { ShopModel } from "$/radiomag-server-express/src/database/tables/shop/type";
import type { Prettify } from "$/utiliti-types";

export type Shop = Prettify<ShopModel>;
export type Shops = Shop[] | [];
