import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategorias } from "../services/categoriaService";

export default function Categorias() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCategorias();
      setCategorias(data);
      setLoading(false);
    };

    fetchCategorias();
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Deseja excluir esta categoria?")) return;
    // futuramente: deleteCategoria(id)
    setCategorias((prev) => prev.filter((c) => c.id !== id));
  };

  const categoriasFiltradas = categorias.filter((c) => {
    const matchBusca = c.nome.toLowerCase().includes(busca.toLowerCase());
    return matchBusca;
  });

  return (
    <div className="container-fluid">

      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-semibold mb-0">Categorias</h2>
          <p className="text-muted mb-0">{categorias.length} categorias no total</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/categorias/nova")}
        >
          + Nova categoria
        </button>
      </div>

      {/* Filtros */}
      <div className="row g-2 mb-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <div className="col-md-1">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => { setBusca(""); }}
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5 text-muted">Carregando categorias...</div>
          ) : categoriasFiltradas.length === 0 ? (
            <div className="text-center py-5 text-muted">Nenhuma categoria encontrada.</div>
          ) : (
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {categoriasFiltradas.map((c) => (
                  <tr key={c.id}>
                    <td className="text-muted">{c.id}</td>
                    <td className="fw-medium">{c.nome}</td>
                    <td>{c.descricao}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => navigate(`/categorias/${c.id}/editar`)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(c.id)}
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
}