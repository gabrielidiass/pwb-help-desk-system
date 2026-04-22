// index.js
import express from "express";
import sequelize from "./src/database/index.js";
import Usuario from "./src/models/Ticket.js";

const app = express();
app.use(express.json()); // permite receber JSON no body

// Sincroniza o banco ao iniciar
await sequelize.authenticate();
await sequelize.sync({ alter: true });
console.log("Banco conectado e tabelas sincronizadas!");



// GET /usuarios — lista todos
app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

// GET /usuarios/:id — busca um
app.get("/usuarios/:id", async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
  res.json(usuario);
});

// POST /usuarios — cria um novo
app.post("/usuarios", async (req, res) => {
  const { nome, email } = req.body;
  const usuario = await Usuario.create({ nome, email });
  res.status(201).json(usuario);
});

// PUT /usuarios/:id — atualiza
app.put("/usuarios/:id", async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
  await usuario.update(req.body);
  res.json(usuario);
});

// DELETE /usuarios/:id — remove
app.delete("/usuarios/:id", async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
  await usuario.destroy();
  res.json({ mensagem: "Usuário deletado" });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));