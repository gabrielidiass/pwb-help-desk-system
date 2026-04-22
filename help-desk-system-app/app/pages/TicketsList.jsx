import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TICKETS_MOCK = [
  { id: 1, titulo: "Computador não liga", categoria: "Hardware", prioridade: "Alta", status: "Aberto", atribuido: "Ana Silva" },
  { id: 2, titulo: "VPN sem conexão", categoria: "Infraestrutura", prioridade: "Crítica", status: "Em andamento", atribuido: "Carlos Souza" },
  { id: 3, titulo: "Excel travando", categoria: "Software", prioridade: "Média", status: "Resolvido", atribuido: "Maria Oliveira" },
  { id: 4, titulo: "Impressora offline", categoria: "Hardware", prioridade: "Baixa", status: "Fechado", atribuido: "Ana Silva" },
];

const BADGE_PRIORIDADE = {
  "Baixa":    "success",
  "Média":    "warning",
  "Alta":     "danger",
  "Crítica":  "dark",
};

const BADGE_STATUS = {
  "Aberto":        "primary",
  "Em andamento":  "warning",
  "Resolvido":     "success",
  "Fechado":       "secondary",
};

export default function TicketsList() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroPrioridade, setFiltroPrioridade] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    // futuramente: substituir por getTickets() do ticketService
    setTimeout(() => {
      setTickets(TICKETS_MOCK);
      setLoading(false);
    }, 400);
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Deseja excluir este ticket?")) return;
    // futuramente: deleteTicket(id)
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const ticketsFiltrados = tickets.filter((t) => {
    const matchStatus = filtroStatus ? t.status === filtroStatus : true;
    const matchPrioridade = filtroPrioridade ? t.prioridade === filtroPrioridade : true;
    const matchBusca = t.titulo.toLowerCase().includes(busca.toLowerCase());
    return matchStatus && matchPrioridade && matchBusca;
  });

  return (
    <div className="container-fluid">

      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-semibold mb-0">Tickets</h2>
          <p className="text-muted mb-0">{tickets.length} chamados no total</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/tickets/novo")}
        >
          + Novo ticket
        </button>
      </div>

      {/* Filtros */}
      <div className="row g-2 mb-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por título..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
          >
            <option value="">Todos os status</option>
            <option>Aberto</option>
            <option>Em andamento</option>
            <option>Resolvido</option>
            <option>Fechado</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filtroPrioridade}
            onChange={(e) => setFiltroPrioridade(e.target.value)}
          >
            <option value="">Todas as prioridades</option>
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
            <option>Crítica</option>
          </select>
        </div>
        <div className="col-md-1">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => { setBusca(""); setFiltroStatus(""); setFiltroPrioridade(""); }}
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5 text-muted">Carregando tickets...</div>
          ) : ticketsFiltrados.length === 0 ? (
            <div className="text-center py-5 text-muted">Nenhum ticket encontrado.</div>
          ) : (
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Categoria</th>
                  <th>Prioridade</th>
                  <th>Status</th>
                  <th>Atribuído a</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {ticketsFiltrados.map((t) => (
                  <tr key={t.id}>
                    <td className="text-muted">{t.id}</td>
                    <td className="fw-medium">{t.titulo}</td>
                    <td>{t.categoria}</td>
                    <td>
                      <span className={`badge bg-${BADGE_PRIORIDADE[t.prioridade]}`}>
                        {t.prioridade}
                      </span>
                    </td>
                    <td>
                      <span className={`badge bg-${BADGE_STATUS[t.status]}`}>
                        {t.status}
                      </span>
                    </td>
                    <td>{t.atribuido}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => navigate(`/tickets/${t.id}/editar`)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(t.id)}
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