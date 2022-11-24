interface AnalogsTypesData {
    "1": { title: "Можливі заміни", color: "#00ff40" },
    "2": { title: "Супутні товари", color: "#80ffff" },
    "3": { title: "Подарунки", color: "#8080ff" },
    "5": { title: "Можливі заміни", color: "#80ff80" },
    "6": { title: "Супутні товари", color: "#ffffff" },
    "8": { title: "Аналог", color: "#00ff00" },
}

interface ColumnHeaders {
    image: "Фото",
    articul: "Назва",
    pdf: "Техн. інф.",
    nalichie: "Інформація про наявність на складі та термінах поставки",
    price: "Ціна без ПДВ",
    addqty: "Введіть кількість",
    product_descriptions: Record<string, string> | string[],
    sort_by: "Сортувати за"
}

type DescriptionsTitles = Record<string, { value: string, ordering_position: number }>

type FiltersItems = { title: number, qty: number }[][];

type Filters = [] | FiltersItems;

type initialUniqueFilters = Record<string, Record<string, number>>

type initialWarehouseFilters = { title_id: number, qty: number }[];

type Items = Product[];

interface MultilangConstants  {
    item_id_label: "Код товару",
    no_items_founded: "По вибраним параметрам товарів не знайдено",
    show_items: "Застосувати фільтри",
    cancel_filters: "Скасувати фільтри",
    show_all_items: "Показати всі товари на одній сторінці",
    full_catalog_version: "Перейти на повну версію каталогу",
    to_card: "купити",
    coming_soon: "очікується",
    by_default: "За замовчуванням",
    sort_by: "Сортувати за",
    in_stock: "в наявності",
    expand: "розгорнути",
    hide: "згорнути",
    stocks_waiting: "очікується",
    all: "всі",
    description: "Інформація",
    manufacturer: "Виробник",
    category: "Категорія",
    price_via_cart: "товар відсутній, Ви можете зробити запит додавши товар у кошик",
}

interface ProductClasses {
    "1": "ProductModel",
    "2": "ProductRCSModel",
    "3": "ProductDigiModel",
}

// interface StockNames {
//     "0": "очікується",
//     "1": "склад Київ",
//     "2": "РАДІОМАГ-Київ",
//     "3": "РАДІОМАГ-Львів",
//     "4": "РАДІОМАГ-Харків",
//     "5": "РАДІОМАГ-Одеса",
//     "6": "очікується",
//     "8": "РАДІОМАГ-Дніпро",
//     "11": "за зниженою ціною",
// }
type StockNames = Record<string, string>;

type StocksSids = Record<string, number>;

interface Group {
    analogs_types_data: AnalogsTypesData,
    column_headers: ColumnHeaders,
    currency: string,
    currentLang: string,
    descriptions_titles: DescriptionsTitles,
    filters: Filters,
    initialUniqueFilters: initialUniqueFilters,
    initialWarehouseFilters: initialWarehouseFilters,
    is_admin: number,
    items: Items,
    multilang_constants: MultilangConstants,
    productClasses: ProductClasses,
    stock_names: StockNames,
    stocks_sids: StocksSids,
}
