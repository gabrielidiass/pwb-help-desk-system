import sequelize from "../database/index.js";
import Usuario from "../models/Usuario.js";
import { QueryTypes } from "sequelize";

const autenticaUsuarioDB = async (body) => {
  try {
    const { email, senha } = body;

    const results = await sequelize.query(
      `SELECT * FROM usuarios WHERE email = :email AND senha = :senha`,
      {
        replacements: { email, senha },
        type: QueryTypes.SELECT,
      }
    );

    if (results.length === 0) {
      throw new Error("Usuário ou senha inválidos");
    }

    const usuario = results[0];
    return new Usuario(
      usuario.email,
      usuario.tipo,
      usuario.telefone,
      usuario.nome
    );
  } catch (err) {
    throw new Error("Erro ao autenticar o usuário: " + err.message);
  }
};

export { autenticaUsuarioDB };