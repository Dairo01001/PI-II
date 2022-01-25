import { Request, Response, Router } from "express";

import { Game } from "../database";

export const routesVideogame = Router();

routesVideogame.get("/:idVideogame", async (req: Request, res: Response) => {
  const { idVideogame } = req.params;
  if (idVideogame.length > 10) {
    const findGame = await Game.findByPk(idVideogame);
    if (findGame) {
      return res.status(200).json(findGame);
    }
    return res.status(404).json({ msg: "El Juego no se encuentra en la DB" });
  }
});

routesVideogame.post("/", async (req: Request, res: Response) => {
  const { id, name } = req.body;
  res.json({ id, name });
});
