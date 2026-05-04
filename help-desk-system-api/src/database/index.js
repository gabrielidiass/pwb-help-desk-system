import { Sequelize } from "sequelize";
const sequelize = new Sequelize("help_desk_system", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
export default sequelize;
