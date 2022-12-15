import Express from "express";
import { router } from "./routes/index.ts";

const PORT = 3000;

export const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT);
