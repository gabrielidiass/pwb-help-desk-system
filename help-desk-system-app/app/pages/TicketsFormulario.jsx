import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PRIORIDADES = ["Baixa", "Média", "Alta", "Crítica"];
const STATUS = ["Aberto", "Em andamento", "Resolvido", "Fechado"];

export default function TicketForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    titulo: "",
    categoriaId: "",
    prioridade: "",
    status: "Aberto",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEditing) {
      // futuramente: buscar ticket por id na API
      // por ora deixa o form vazio
    }
  }, [id]);

  const validate = () => {
    const erros = {};
    if (!form.titulo.trim()) erros.titulo = "Título é obrigatório.";
    if (!form.categoriaId) erros.categoriaId = "Selecione uma categoria.";
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
      // futuramente: chamar ticketService.create(form) ou ticketService.update(id, form)
      console.log(isEditing ? "Editando:" : "Criando:", form);
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
            {isEditing ? "Atualize os dados do ticket." : "Preencha os dados para abrir um chamado."}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} noValidate>

                {/* Título */}
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

                {/* Categoria */}
                <div className="mb-3">
                  <label className="form-label fw-medium">Categoria</label>
                  <select
                    name="categoriaId"
                    className={`form-select ${errors.categoriaId ? "is-invalid" : ""}`}
                    value={form.categoriaId}
                    onChange={handleChange}
                  >
                    <option value="">Selecione...</option>
                    {CATEGORIAS_MOCK.map((c) => (
                      <option key={c.id} value={c.id}>{c.nome}</option>
                    ))}
                  </select>
                  {errors.categoriaId && (
                    <div className="invalid-feedback">{errors.categoriaId}</div>
                  )}
                </div>

                {/* Prioridade + Status lado a lado */}
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
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.prioridade && (
                      <div className="invalid-feedback">{errors.prioridade}</div>
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
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>


                {/* Botões */}
                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting
                      ? "Salvando..."
                      : isEditing ? "Salvar alterações" : "Criar ticket"}
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