import { Application, Request, Response } from "express";

import { routesGenres } from "../routes/genres";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({ msg: "Hello World!" });
  });
  app.use("/genres", routesGenres);
};
