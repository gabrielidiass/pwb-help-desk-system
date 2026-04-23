import { Router } from "express";
import CategoriaController from "./controller/CategoriaController.js";
import DispositivoController from "./controller/DispositivoController.js";
import TicketController from "./controller/TicketController.js";

const router = Router();

// 📌 ROTAS DE CATEGORIA
router.post("/categorias", CategoriaController.criar);
router.get("/categorias", CategoriaController.listar);
router.get("/categorias/:id", CategoriaController.buscarPorId);
router.put("/categorias/:id", CategoriaController.atualizar);
router.delete("/categorias/:id", CategoriaController.deletar);

// 📌 ROTAS DE DISPOSITIVO
router.post("/dispositivos", DispositivoController.criar);
router.get("/dispositivos", DispositivoController.listar);
router.get("/dispositivos/:id", DispositivoController.buscarPorId);
router.put("/dispositivos/:id", DispositivoController.atualizar);
router.delete("/dispositivos/:id", DispositivoController.deletar);

// 📌 ROTAS DE TICKET
router.post("/tickets", TicketController.criar);
router.get("/tickets", TicketController.listar);
router.get("/tickets/:id", TicketController.buscarPorId);
router.put("/tickets/:id", TicketController.atualizar);
router.delete("/tickets/:id", TicketController.deletar);

export default router;