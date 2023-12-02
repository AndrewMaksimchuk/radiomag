/* eslint-disable */
import type { Locale } from "../locales";
import bulletin from "./components/bulletin";
import buttonUp from "./components/buttonUp";
import card from "./components/card";
import catalog from "@/components/CatalogShortComponent/languages";
import copyright from "./components/copyright";
import errors from "./components/errors";
import filters from "./components/filters";
import footer from "./components/footer";
import group from "./components/group";
import header from "./components/header";
import linecard from "./components/linecard";
import manufacturers from "./components/manufacturers";
import news from "./components/news";
import orderContactFormUnit from "./components/orderContactFormUnit";
import order from "./components/order";
import pagination from "./components/pagination";
import popularProducts from "./components/popularProducts";
import search from "./components/search";
import title from "./components/title";
import validations from "./components/validations";
import orderContactFormSubscriptions from "./components/orderContactFormSubscriptions";
import orderContactFormSendingTypeOfDelivery from "./components/orderContactFormSendingTypeOfDelivery";
import orderContactFormSendingContactPerson from "./components/orderContactFormSendingContactPerson";
import orderContactFormSendingRecipient from "./components/orderContactFormSendingRecipient";
import orderContactFormSendingAddress from "./components/orderContactFormSendingAddress";
import orderContactFormSendingCity from "./components/orderContactFormSendingCity";
import OrderContactFormComponent from "./components/OrderContactFormComponent";
import modelUser from "./components/modelUser";
import ServerNotAvailableComponent from "@/components/ServerNotAvailableComponent/languages";
import groupSearch from "@/components/GroupSearchComponent/languages";
import toggleGroupView from "@/components/ToggleGroupViewComponent/languages";
import loginPage from "@/views/LoginPage/languages";
import userPage from "@/views/UserPage/languages";
import HTTP403Page from "@/views/HTTP403Page/languages";
import ordersStore from "@/store/orders/languages";
import userOrdersComponent from "@/components/UserOrdersComponent/languages";
import orderContactFormUnitOptions from "@/components/OrderContactFormUnitOptionsComponent/languages";

export type Collection = Record<Locale, Record<string, unknown>>[];

export const collection = [
  bulletin,
  buttonUp,
  card,
  catalog,
  copyright,
  errors,
  filters,
  footer,
  group,
  header,
  linecard,
  manufacturers,
  news,
  orderContactFormUnit,
  order,
  pagination,
  popularProducts,
  search,
  title,
  validations,
  orderContactFormSubscriptions,
  orderContactFormSendingTypeOfDelivery,
  orderContactFormSendingContactPerson,
  orderContactFormSendingRecipient,
  orderContactFormSendingAddress,
  orderContactFormSendingCity,
  OrderContactFormComponent,
  modelUser,
  ServerNotAvailableComponent,
  groupSearch,
  toggleGroupView,
  loginPage,
  userPage,
  HTTP403Page,
  ordersStore,
  userOrdersComponent,
  orderContactFormUnitOptions,
];
