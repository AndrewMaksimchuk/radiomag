import request from "supertest";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const baseURL = `http://localhost:${port}`;

export const app = request(baseURL);

export type App = typeof app;
