import { Sequelize } from "sequelize";

import config from "./config/config";
import game from "./models/game";
import genre from "./models/genre";

export const sequelize = new Sequelize(
  `postgres://${config.DB.USER}:${config.DB.PASSWORD}@${config.DB.HOST}/videogames`,
  {
    logging: false,
    native: false,
  }
);

genre(sequelize);
game(sequelize);

export const { Genre, Game } = sequelize.models;
Game.belongsToMany(Genre, { through: "Game_Genre" });
Genre.belongsToMany(Game, { through: "Game_Genre" });
