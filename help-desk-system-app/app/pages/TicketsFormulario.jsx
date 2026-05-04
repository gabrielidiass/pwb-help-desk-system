import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTicketById,
  createTicket,
  updateTicket,
} from "../services/ticketService";
import { getCategorias } from "../services/categoriaService";
import { getDispositivos } from "../services/dispositivoService";

const PRIORIDADES = ["Baixa", "Média", "Alta", "Crítica"];
const STATUS = ["Aberto", "Em andamento", "Resolvido", "Fechado"];

export default function TicketForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    categoria_id: "",
    prioridade: "",
    status: "Aberto",
  });

  const [categorias, setCategorias] = useState([]);
  const [dispositivos, setDispositivos] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const cats = await getCategorias();
      setCategorias(cats);

      const devs = await getDispositivos();
      setDispositivos(devs);

      if (isEditing) {
        const data = await getTicketById(id);
        setForm({
          titulo: data.titulo || "",
          descricao: data.descricao || "",
          dispositivo_id: data.dispositivo_id || "",
          prioridade: data.prioridade || "",
          status: data.status || "Aberto",
        });
      }
    };

    loadData();
  }, [id, isEditing]);

  const validate = () => {
    const erros = {};
    if (!form.titulo.trim()) erros.titulo = "Título é obrigatório.";
    if (!form.descricao.trim()) erros.descricao = "Descrição é obrigatória.";
    if (!form.dispositivo_id) erros.dispositivo_id = "Selecione um dispositivo.";
    if (!form.prioridade) erros.prioridade = "Selecione uma prioridade.";
    return erros;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erros = validate();
    if (Object.keys(erros).length > 0) {
      setErrors(erros);
      return;
    }

    setSubmitting(true);
    try {
      if (isEditing) {
        await updateTicket(id, form);
      } else {
        await createTicket(form);
      }
      navigate("/tickets");
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-semibold">
            {isEditing ? `Editando ticket #${id}` : "Novo ticket"}
          </h2>
          <p className="text-muted mb-0">
            {isEditing
              ? "Atualize os dados do ticket."
              : "Preencha os dados para abrir um chamado."}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-medium">Título</label>
                  <input
                    type="text"
                    name="titulo"
                    className={`form-control ${errors.titulo ? "is-invalid" : ""}`}
                    placeholder="Descreva o problema brevemente"
                    value={form.titulo}
                    onChange={handleChange}
                  />
                  {errors.titulo && (
                    <div className="invalid-feedback">{errors.titulo}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Descrição</label>
                  <input
                    type="text"
                    name="descricao"
                    className={`form-control ${errors.descricao ? "is-invalid" : ""}`}
                    placeholder="Descreva o problema em detalhes"
                    value={form.descricao}
                    onChange={handleChange}
                  />
                  {errors.descricao && (
                    <div className="invalid-feedback">{errors.descricao}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Categoria</label>
                  <select
                    name="categoria_id"
                    className={`form-select ${errors.categoria_id ? "is-invalid" : ""}`}
                    value={form.Categoria}
                    onChange={handleChange}
                  >
                    <option value="">Selecione...</option>
                    {categorias.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.nome}
                      </option>
                    ))}
                  </select>
                  {errors.categoria_id && (
                    <div className="invalid-feedback">{errors.categoria_id}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Dispositivo</label>
                  <select
                    name="dispositivo_id"
                    className={`form-select ${errors.dispositivo_id ? "is-invalid" : ""}`}
                    value={form.dispositivo_id}
                    onChange={handleChange}
                  >
                    <option value="">Selecione...</option>
                    {dispositivos.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.nome}
                      </option>
                    ))}
                  </select>
                  {errors.dispositivo_id && (
                    <div className="invalid-feedback">{errors.dispositivo_id}</div>
                  )}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Prioridade</label>
                    <select
                      name="prioridade"
                      className={`form-select ${errors.prioridade ? "is-invalid" : ""}`}
                      value={form.prioridade}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      {PRIORIDADES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.prioridade && (
                      <div className="invalid-feedback">
                        {errors.prioridade}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-medium">Status</label>
                    <select
                      name="status"
                      className="form-select"
                      value={form.status}
                      onChange={handleChange}
                    >
                      {STATUS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting
                      ? "Salvando..."
                      : isEditing
                        ? "Salvar alterações"
                        : "Criar ticket"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/tickets")}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
