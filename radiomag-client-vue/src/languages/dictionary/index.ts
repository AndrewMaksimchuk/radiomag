import type { Locale } from "../locales";
import type { Collection } from "./collection";
import { locales } from "../locales";
import { collection } from "./collection";

const collect = (lang: Locale, collection: Collection) => {
  return collection.reduce((previousValue, currentValue) => {
    return { ...previousValue, ...currentValue[lang] };
  }, {});
};

const collectLocales = (collection: Collection) => {
  return locales.map((value) => collect(value, collection));
};

const [ua, en] = collectLocales(collection);

export const messages = { ua, en };
export default messages;
