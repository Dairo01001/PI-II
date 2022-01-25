import { DataTypes, Sequelize } from "sequelize";

export interface IGame {
  id: string;
  name: string;
  description: string;
  released: string;
  rating: number;
  platforms: [];
}

const game = (sequelize: Sequelize): void => {
  sequelize.define(
    "Game",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      platforms: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      tableName: "games",
      timestamps: false,
    }
  );
};

export default game;
