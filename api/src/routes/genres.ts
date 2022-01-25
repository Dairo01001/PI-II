import { Request, Response, Router } from "express";

import { Genre } from "../database";

export const routesGenres = Router();

routesGenres.get("/", async (req: Request, res: Response) => {
  const genres = await Genre.findAll();
  res.status(201).json(genres);
});
