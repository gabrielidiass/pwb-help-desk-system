import Ticket from "../models/Ticket.js";
import Categoria from "../models/Categoria.js";
import Dispositivo from "../models/Dispositivo.js";

class TicketController {
  // 📌 Criar ticket
  static async criar(req, res) {
    try {
      const { titulo, descricao, status, prioridade, categoria_id, dispositivo_id } = req.body;

      if (!titulo || !descricao) {
        return res.status(400).json({
          erro: "Título e descrição são obrigatórios",
        });
      }

      const ticket = await Ticket.create({
        titulo,
        descricao,
        status,
        prioridade,
      });

      return res.status(201).json(ticket);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Listar todos
  static async listar(req, res) {
    try {
      const tickets = await Ticket.findAll({
        include: [{ model: Categoria }, { model: Dispositivo }],
      });
      return res.json(tickets);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Buscar por ID
  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const ticket = await Ticket.findByPk(id, {
        include: [{ model: Categoria }, { model: Dispositivo }],
      });

      if (!ticket) {
        return res.status(404).json({ erro: "Ticket não encontrado" });
      }

      return res.json(ticket);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Atualizar
  static async atualizar(req, res) {
    try {
      const { id } = req.params;

      const ticket = await Ticket.findByPk(id);

      if (!ticket) {
        return res.status(404).json({ erro: "Ticket não encontrado" });
      }

      await ticket.update(req.body);

      return res.json(ticket);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Deletar
  static async deletar(req, res) {
    try {
      const { id } = req.params;

      const ticket = await Ticket.findByPk(id);

      if (!ticket) {
        return res.status(404).json({ erro: "Ticket não encontrado" });
      }

      await ticket.destroy();

      return res.json({ mensagem: "Ticket deletado com sucesso" });
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

export default TicketController;
