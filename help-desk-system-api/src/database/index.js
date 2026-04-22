import { Sequelize } from "sequelize";
const sequelize = new Sequelize("nome_banco", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
export default sequelize;
