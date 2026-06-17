import { Router } from "express";
import CategoriaController from "./controller/CategoriaController.js";
import DispositivoController from "./controller/DispositivoController.js";
import TicketController from "./controller/TicketController.js";
import { verificaJWT, login } from "./controller/SegurancaController.js";

const router = Router();

router.post("/categorias", verificaJWT, CategoriaController.criar);
router.get("/categorias", verificaJWT, CategoriaController.listar);
router.get("/categorias/:id", verificaJWT, CategoriaController.buscarPorId);
router.put("/categorias/:id", verificaJWT, CategoriaController.atualizar);
router.delete("/categorias/:id", verificaJWT, CategoriaController.deletar);

router.post("/dispositivos", verificaJWT, DispositivoController.criar);
router.get("/dispositivos", verificaJWT, DispositivoController.listar);
router.get("/dispositivos/:id", verificaJWT, DispositivoController.buscarPorId);
router.put("/dispositivos/:id", verificaJWT, DispositivoController.atualizar);
router.delete("/dispositivos/:id", verificaJWT, DispositivoController.deletar);

router.post("/tickets", TicketController.criar);
router.get("/tickets", verificaJWT, TicketController.listar);
router.get("/tickets/:id", verificaJWT, TicketController.buscarPorId);
router.put("/tickets/:id", verificaJWT, TicketController.atualizar);
router.delete("/tickets/:id", verificaJWT, TicketController.deletar);

router.route("/login").get(login);

export default router;