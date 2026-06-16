
import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Usuario = sequelize.define("Usuario", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM("U", "A"),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isEmail: true
    }
  }
});
export default Usuario;


class Usuario {
    constructor(email, tipo, telefone, nome) {
        this.email = email;
        this.tipo = tipo;
        this.telefone = telefone;
        this.nome = nome;
    }
}

module.exports = Usuario;