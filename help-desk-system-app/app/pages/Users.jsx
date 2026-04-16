import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const USERS_MOCK = [
  { id: 1, nome: "Ana Silva", especialidade: "Hardware" },
  { id: 2, nome: "Carlos Souza", especialidade: "Infraestrutura" },
  { id: 3, nome: "Maria Oliveira", especialidade: "Software" },
  { id: 4, nome: "João Pereira", especialidade: "Redes" },
];

export default function UsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [filtroEspecialidade, setFiltroEspecialidade] = useState("");

  useEffect(() => {
    // futuramente: getUsers()
    setTimeout(() => {
      setUsers(USERS_MOCK);
      setLoading(false);
    }, 400);
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Deseja excluir este usuário?")) return;
    // futuramente: deleteUser(id)
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const usersFiltrados = users.filter((u) => {
    const matchBusca = u.nome.toLowerCase().includes(busca.toLowerCase());
    const matchEspecialidade = filtroEspecialidade
      ? u.especialidade === filtroEspecialidade
      : true;

    return matchBusca && matchEspecialidade;
  });

  return (
    <div className="container-fluid">

      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-semibold mb-0">Usuários</h2>
          <p className="text-muted mb-0">{users.length} usuários no total</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/users/novo")}
        >
          + Novo usuário
        </button>
      </div>

      {/* Filtros */}
      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filtroEspecialidade}
            onChange={(e) => setFiltroEspecialidade(e.target.value)}
          >
            <option value="">Todas as especialidades</option>
            <option>Hardware</option>
            <option>Software</option>
            <option>Infraestrutura</option>
            <option>Redes</option>
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              setBusca("");
              setFiltroEspecialidade("");
            }}
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5 text-muted">
              Carregando usuários...
            </div>
          ) : usersFiltrados.length === 0 ? (
            <div className="text-center py-5 text-muted">
              Nenhum usuário encontrado.
            </div>
          ) : (
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Especialidade</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {usersFiltrados.map((u) => (
                  <tr key={u.id}>
                    <td className="text-muted">{u.id}</td>
                    <td className="fw-medium">{u.nome}</td>
                    <td>{u.especialidade}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => navigate(`/users/${u.id}/editar`)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(u.id)}
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