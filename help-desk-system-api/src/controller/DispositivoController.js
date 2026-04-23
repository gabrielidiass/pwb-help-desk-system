import Dispositivo from "../models/Dispositivo.js";

class DispositivoController {

  static async criar(req, res) {
    try {
      const { nome, tipo, status } = req.body;

      if (!nome || !tipo || !status) {
        return res.status(400).json({
          erro: "Nome, tipo e status são obrigatórios",
        });
      }

      const dispositivo = await Dispositivo.create({
        nome,
        tipo, status,
      });

      return res.status(201).json(dispositivo);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  
  static async listar(req, res) {
    try {
      const dispositivos = await Dispositivo.findAll();
      return res.json(dispositivos);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Buscar por ID
  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const dispositivo = await Dispositivo.findByPk(id);

      if (!dispositivo) {
        return res.status(404).json({ erro: "Dispositivo não encontrado" });
      }

      return res.json(dispositivo);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Atualizar
  static async atualizar(req, res) {
    try {
      const { id } = req.params;

      const dispositivo = await Dispositivo.findByPk(id);

      if (!dispositivo) {
        return res.status(404).json({ erro: "Dispositivo não encontrado" });
      }

      await dispositivo.update(req.body);

      return res.json(dispositivo);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Deletar
  static async deletar(req, res) {
    try {
      const { id } = req.params;

      const dispositivo = await Dispositivo.findByPk(id);

      if (!dispositivo) {
        return res.status(404).json({ erro: "Dispositivo não encontrado" });
      }

      await dispositivo.destroy();

      return res.json({ mensagem: "Dispositivo deletado com sucesso" });
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

export default DispositivoController;
