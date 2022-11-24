type TransferObject = {
    type: "sum_all_product_description",
    data: Group,
} | {
    type: "return_sum_all_product_description",
    data: WorkerProduct[],
};

interface WorkerProduct extends Product {
    description: string[],
    stock_data: {
        stock: string,
        stockName: string,
    }[],
}
