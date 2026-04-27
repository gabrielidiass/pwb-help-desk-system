// index.js
import express from "express";
import sequelize from "./src/database/index.js";
import routes from "./src/routes.js";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json()); // permite receber JSON no body
app.use(routes);

// Sincroniza o banco ao iniciar
await sequelize.authenticate();
await sequelize.sync({ alter: true });
console.log("Banco conectado e tabelas sincronizadas!");

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));