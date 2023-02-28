import type { Contacts } from "../../../dto/Contacts";

export const contacts: Contacts = [
  {
    headerText: "Відділ продажів",
    list: [
      {
        name: "",
        location: "м. Київ, Чоколівський бульвар, 42А, офіс 134-1",
        email: "sales@radiomag.com.ua",
        workTime: "",
        telephons: "+38-044-299-77-44",
      },
    ],
    map: {
      zoom: 15,
      view: {
        lat: 50.4356,
        lng: 30.4529,
      },
      markers: [
        {
          lat: 50.4386,
          lng: 30.45186,
        },
      ],
    },
  },
  {
    headerText: 'Мережа магазинів "Радіомаг"',
    list: [
      {
        name: "РАДІОМАГ Київ",
        location:
          'Адреса магазину: м. Київ, вул. Ушинського, 1 (біля радіоринку "Караваєві дачі")',
        email: "sales@radiomag.com.ua",
        workTime: "Години роботи: Пн-Сб 9:00-16:00",
        telephons: "",
      },
      {
        name: "РАДІОМАГ Харків",
        location: "м. Харків, в'їзд Мар'євський, 14.",
        email: "kharkov@radiomag.com.ua",
        workTime: "Пн-Сб 9:00-16:00",
        telephons: "+38-068-121-76-72",
      },
      {
        name: "РАДІОМАГ Одеса",
        location: "м. Одеса, вул.Троїцька, 46",
        email: "odessa@radiomag.com.ua",
        workTime: "Пн-Сб 10:00-17:00",
        telephons: "+38-096-037-99-64",
      },
      {
        name: "РАДІОМАГ Дніпро",
        location:
          "м. Дніпро, вул. Княгині Ольги, 6 (бувша вул. Горького) ТЦ «Палас» 1 поверх",
        email: "dnepr@radiomag.com.ua",
        workTime: "Пн-Сб 10:00-17:00",
        telephons: "+38-068-478-31-00",
      },
      {
        name: "РАДІОМАГ Львів",
        location:
          'м. Львів, вул. Богдана Хмельницького, 176 (бізнес-центр "Лемберг")',
        email: "lviv@radiomag.com.ua",
        workTime: "Пн-Сб 10:00-17:00",
        telephons: "+38-096-601-20-71",
      },
    ],
    map: {
      zoom: 6,
      view: {
        lat: 48.524,
        lng: 31.179,
      },
      markers: [
        {
          lat: 50.43656,
          lng: 30.45139,
        },
        {
          lat: 49.990155,
          lng: 36.284429,
        },
        {
          lat: 46.477089,
          lng: 30.736684,
        },
        {
          lat: 48.474886,
          lng: 35.025399,
        },
        {
          lat: 49.861555,
          lng: 24.051325,
        },
      ],
    },
  },
];
