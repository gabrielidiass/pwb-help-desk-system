// index.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sequelize from "./src/database/index.js";
import router from "./src/routes.js";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json()); // permite receber JSON no body
app.use(router);
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// Sincroniza o banco ao iniciar
await sequelize.authenticate();
await sequelize.sync({ alter: true });
console.log("Banco conectado e tabelas sincronizadas!");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);