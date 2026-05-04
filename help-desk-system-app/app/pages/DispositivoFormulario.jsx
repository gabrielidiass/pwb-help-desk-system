import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDispositivoById,
  createDispositivo,
  updateDispositivo,
} from "../services/dispositivoService";

export default function DispositivoForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    status: "ativo",
  });

  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      const fetchDispositivo = async () => {
        const data = await getDispositivoById(id);
        setForm(data);
      };
      fetchDispositivo();
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await updateDispositivo(id, form);
    } else {
      await createDispositivo(form);
    }

    navigate("/dispositivos");
  };

  return (
    <div className="container">
      <h2 className="mb-4">
        {isEdit ? "Editar Dispositivo" : "Novo Dispositivo"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <input
            type="text"
            name="tipo"
            className="form-control"
            value={form.tipo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={form.status}
            onChange={handleChange}
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="manutencao">Manutenção</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/dispositivo")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}