import { sequelize } from '../config.js';
import Usuario from '../models/Usuario.js';

const autenticaUsuarioDB = async (body) => {
    try {           
        const { email, senha } = body
        const results = await sequelize.query(`SELECT * FROM usuarios WHERE email = :email AND senha = :senha`,
        { replacements: { email, senha }, type: sequelize.QueryTypes.SELECT });

        if (results.length == 0) {
            throw "Usuário ou senha inválidos";
        }
        const usuario = results[0];
        return new Usuario(usuario.email, usuario.tipo, usuario.telefone, usuario.nome);
    } catch (err) {
        throw "Erro ao autenticar o usuário: " + err;
    }    
}

module.exports = {
    autenticaUsuarioDB
}
