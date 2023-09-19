import names from "../tables/names.json" assert { type: "json" };
import { createCart } from "../tables/cart/create.js";
import { createOrderForm } from "../tables/orderForm/create.js";
import { createOrder } from "../tables/order/create.js";

/**
 * @param { import("knex").Knex } knex
 */
export const up = function (knex) {
  return knex.schema
    .createTable(names.cart, createCart)
    .createTable(names.orderForm, createOrderForm)
    .createTable(names.order, createOrder);
};

/**
 * @param { import("knex").Knex } knex
 */
export const down = function (knex) {
  return knex.schema
    .dropTable(names.cart)
    .dropTable(names.orderForm)
    .dropTable(names.order);
};
