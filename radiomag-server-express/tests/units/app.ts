import request from "supertest";

const baseURL = `http://localhost:${process.env.PORT}`;

export const app = request(baseURL);

export type App = typeof app;
