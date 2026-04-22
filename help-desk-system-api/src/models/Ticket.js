// src/models/Ticket.js
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
    type: DataTypes.ENUM("aberto", "andamento", "resolvido", "fechado"),
    defaultValue: "aberto",
  },
  prioridade: {
    type: DataTypes.ENUM("baixa", "média", "alta", "crítica"),
    defaultValue: "média",
  },
});

