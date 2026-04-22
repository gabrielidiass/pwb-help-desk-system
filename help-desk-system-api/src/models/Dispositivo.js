import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Dispositivo = sequelize.define("Dispositivo", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Dispositivo;
