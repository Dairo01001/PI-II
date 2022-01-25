import cors from "cors";
import express from "express";
import morgan from "morgan";

import config from "./config/config";
import { loadApiEndpoints } from "./controllers/api";

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.ACCESS);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

loadApiEndpoints(app);

export default app;
