import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Dispositivo = sequelize.define("Dispositivo", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Dispositivo;
