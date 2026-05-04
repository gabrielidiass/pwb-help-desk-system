import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Ticket = sequelize.define("Ticket", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Aberto", "Em andamento", "Resolvido", "Fechado"),
    defaultValue: "Aberto",
  },
  prioridade: {
    type: DataTypes.ENUM("Baixa", "Média", "Alta", "Crítica"),
    defaultValue: "Média",
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dispositivo_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
export default Ticket;
