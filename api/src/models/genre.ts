import { DataTypes, Sequelize } from "sequelize";

const genre = (sequelize: Sequelize): void => {
  sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "genres",
    }
  );
};

export default genre;
