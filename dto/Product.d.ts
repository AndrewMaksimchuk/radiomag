type Description = string[];

interface PriceItem {
    q: number,
    p: number,
    disabled: boolean,
}

type Price = PriceItem[];

type StockItems = {
    stock: string,
    stock_wait: string | undefined,
    stock_id: string | undefined,
}[];

interface Stock {
    items: StockItems,
    totals: {
        in_stock: number,
        wait: number
    },
}

type WaitingItem = {
    qty: string,
    date:string,
}[];

type WaitingDataItems = WaitingItem | [] | null;

interface Product {
    id: number,
    articul: string,
    url: string,
    description: Description,
    image: string,
    remaining_images_qty: number,
    datasheet_link_data: string,
    extended_description: boolean,
    pcs: string,
    total_stock: string,
    prices: Price,
    moq: null,
    google_category_id: string,
    initialPosition: number,
    product_analogs_types: string[] | null,
    total: number,
    stock_data: Stock,
    waiting_date_items: WaitingDataItems,
    waiting_total: number,
}