import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Categoria = sequelize.define("Categoria", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Categoria;