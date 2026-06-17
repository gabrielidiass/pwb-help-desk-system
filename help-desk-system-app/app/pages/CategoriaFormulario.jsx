import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategoriaById, createCategoria, updateCategoria } from "../services/categoriaService";
import WithAuth from "../../../seguranca/WithAuth";

function CategoriaFormulario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEditing) {
      getCategoriaById(id).then((data) => {
        setForm({
          nome: data.nome || "",
          descricao: data.descricao || "",
        });
      });
    }
  }, [id, isEditing]);

  const validate = () => {
    const erros = {};
    if (!form.nome.trim()) erros.nome = "Nome é obrigatório.";
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
        await updateCategoria(id, form);
      } else {
        await createCategoria(form);
      }

      navigate("/categorias");
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid">
      <h2>{isEditing ? "Editar categoria" : "Nova categoria"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            name="nome"
            className={`form-control ${errors.nome ? "is-invalid" : ""}`}
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            name="descricao"
            className="form-control"
            placeholder="Descrição"
            value={form.descricao}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" disabled={submitting}>
          {submitting ? "Salvando..." : isEditing ? "Salvar" : "Criar"}
        </button>
      </form>
    </div>
  );
}
export default WithAuth(CategoriaFormulario);