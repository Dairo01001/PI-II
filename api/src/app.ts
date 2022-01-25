import express from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

loadApiEndpoints(app);

export default app;
