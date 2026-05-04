import Categoria from "../models/Categoria.js";

class CategoriaController {

  static async criar(req, res) {
    try {
      const { nome, descricao } = req.body;

      if (!nome || !descricao) {
        return res.status(400).json({
          erro: "Nome e descrição são obrigatórios",
        });
      }

      const categoria = await Categoria.create({
        nome,
        descricao,
      });

      return res.status(201).json(categoria);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  
  static async listar(req, res) {
    try {
      const categorias = await Categoria.findAll();
      return res.json(categorias);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Buscar por ID
  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ erro: "Categoria não encontrado" });
      }

      return res.json(categoria);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Atualizar
  static async atualizar(req, res) {
    try {
      const { id } = req.params;

      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ erro: "Categoria não encontrado" });
      }

      await categoria.update(req.body);

      return res.json(categoria);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  // 📌 Deletar
  static async deletar(req, res) {
    try {
      const { id } = req.params;

      const categoria = await Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ erro: "Categoria não encontrado" });
      }

      await categoria.destroy();

      return res.json({ mensagem: "Categoria deletado com sucesso" });
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

export default CategoriaController;
