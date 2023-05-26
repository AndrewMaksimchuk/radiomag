import type { LatLngLiteral } from "../node_modules/@types/leaflet";

export type ContactItemList = {
  name: string;
  location: string;
  email: string;
  workTime: string;
  telephons: string;
};

export interface ContactItem {
  headerText: string;
  list: ContactItemList[];
  map: {
    zoom: number;
    view: LatLngLiteral;
    markers: LatLngLiteral[];
  };
}

export type Contacts = ContactItem[];
