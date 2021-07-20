export default async function getListOfCatalogGroups(id) {
  let list = null;
  if (id === 1) {
    list = [
      { id: 195, name: 'Світлодіоди вивідні', img: 'svetodiodi_vidimogo_vivodnie.gif' },
      { id: 479, name: 'Елементи розумного будинку', img: 'smart_house-group.png' },
      { id: 311, name: 'Реле', img: 'relay.gif' },
      { id: 65, name: 'Перемикачі', img: 'perekluchately_images.gif' },
      { id: 410, name: 'Кнопки', img: 'knopki_klaviatury.gif' },
      { id: 356, name: 'Батарейки', img: 'batariiki-images.gif' },
      { id: 350, name: 'Вентилятори', img: 'ventiljatori_images.gif' },
      { id: 348, name: 'Корпуса', img: '492.gif' },
      { id: 359, name: 'Ізоляційні матеріали', img: 'izoliacionnie_materiali.gif' },
      { id: 338, name: 'Магніти', img: 'magniti-neodimovie.gif' },
      { id: 400, name: 'Блоки живлення пластикові корпуса', img: '446.gif' },
      { id: 340, name: 'Блоки живлення металеві корпуса', img: 'GK-100.png' },
      { id: 403, name: 'Блоки живлення герметичні', img: 'LPC-20.png' },
      { id: 53, name: 'Звукові випромінювачі', img: 'dinamiki-images.gif' },
    ];
  }
  if (id === 2) {
    list = [
      { id: 578, name: 'Вимірювальні прилади', img: '473.jpg' },
      { id: 448, name: 'Паяльники', img: 'payalniki.jpg' },
      { id: 223, name: 'Паяльні станції', img: '968.gif' },
      { id: 478, name: 'Флюси', img: 'prodimg-flux_pjal-cat.png' },
      { id: 302, name: 'Припої', img: 'lc60-0.50_0.1.gif' },
      { id: 377, name: 'Жала', img: 'gala_nabor20.png' },
      { id: 354, name: 'Склотекстоліт', img: 'steklo_tekstoliti.gif' },
      { id: 394, name: 'Ручні лупи, бінокуляри', img: 'microscopi-images.gif' },
      { id: 436, name: 'Обжимний інструмент', img: 'crimp.jpg' },
      { id: 434, name: 'Зачисний, обрізний інструмент', img: 'stripper.jpg' },
      { id: 443, name: 'Пінцети', img: 'pincthet.jpg' },
      { id: 432, name: 'Кусачки, бокорізи', img: 'bokoriz.jpg' },
      { id: 437, name: 'Викрутки', img: 'vukrutku.jpg' },
    ];
  }
  if (id === 3) {
    list = [
      { id: 426, name: 'Arduino', img: 'arduino-images.png' },
      { id: 341, name: 'Коснтруктори набори', img: 'masterkit.gif' },
    ];
  }
  return list;
}

export async function getGroupData(id) {
  const url = `http://localhost:3000/group/${id}`;
  const data = await fetch(url);
  return data.json();
}

export const allContacts = [
  {
    headerText: 'Відділ продажів',
    list: [
      {
        name: '',
        location: 'м. Київ, Чоколівський бульвар, 42А, офіс 134-1',
        email: 'sales@radiomag.com.ua',
        workTime: '',
        telephons: '+38-044-299-77-44',
      },
    ],
  },
  {
    headerText: 'Мережа магазинів "Радіомаг"',
    list: [
      {
        name: 'РАДІОМАГ Київ',
        location: 'Адреса магазину: м. Київ, вул. Ушинського, 1 (біля радіоринку "Караваєві дачі")',
        email: 'sales@radiomag.com.ua',
        workTime: 'Години роботи: Пн-Сб 9:00-16:00',
        telephons: '',
      },
      {
        name: 'РАДІОМАГ Харків',
        location: 'м. Харків, в\'їзд Мар\'євський, 14.',
        email: 'kharkov@radiomag.com.ua',
        workTime: 'Пн-Сб 9:00-16:00',
        telephons: '+38-068-121-76-72',
      },
      {
        name: 'РАДІОМАГ Одеса',
        location: 'м. Одеса, вул.Троїцька, 46',
        email: 'odessa@radiomag.com.ua',
        workTime: 'Пн-Сб 10:00-17:00',
        telephons: '+38-096-037-99-64',
      },
      {
        name: 'РАДІОМАГ Дніпро',
        location: 'м. Дніпро, вул. Княгині Ольги, 6 (бувша вул. Горького) ТЦ «Палас» 1 поверх',
        email: 'dnepr@radiomag.com.ua',
        workTime: 'Пн-Сб 10:00-17:00',
        telephons: '+38-068-478-31-00',
      },
      {
        name: 'РАДІОМАГ Львів',
        location: 'м. Львів, вул. Богдана Хмельницького, 176 (бізнес-центр "Лемберг")',
        email: 'lviv@radiomag.com.ua',
        workTime: 'Пн-Сб 10:00-17:00',
        telephons: '+38-096-601-20-71',
      },
    ],
  },
];
