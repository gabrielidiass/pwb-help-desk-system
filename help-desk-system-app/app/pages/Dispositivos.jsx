import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from "react-router-dom";
import { getDispositivos } from "../services/dispositivoService";

// antes de exportar o WithAuth é chamado
export default WithAuth(Produto);

export default function Dispositivos() {
  const navigate = useNavigate();

  const [dispositivos, setDispositivos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchDispositivos = async () => {
      try {
        const data = await getDispositivos();
        setDispositivos(data);
      } catch (error) {
        console.error("Erro ao carregar dispositivos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDispositivos();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Deseja excluir este dispositivo?")) return;

    // aqui depois você pode integrar com API
    setDispositivos((prev) => prev.filter((d) => d.id !== id));
  };

  const dispositivosFiltrados = dispositivos.filter((d) =>
    d.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-semibold mb-0">Dispositivos</h2>
          <p className="text-muted mb-0">
            {dispositivos.length} dispositivos no total
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/dispositivos/novo")}
        >
          + Novo dispositivo
        </button>
      </div>

      {/* Busca */}
      <div className="row g-2 mb-3">
        <div className="col-md-11">
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
            onClick={() => setBusca("")}
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
              Carregando dispositivos...
            </div>
          ) : dispositivosFiltrados.length === 0 ? (
            <div className="text-center py-5 text-muted">
              Nenhum dispositivo encontrado.
            </div>
          ) : (
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {dispositivosFiltrados.map((d) => (
                  <tr key={d.id}>
                    <td className="text-muted">{d.id}</td>
                    <td className="fw-medium">{d.nome}</td>
                    <td>{d.tipo}</td>
                    <td>{d.status}</td>

                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() =>
                            navigate(`/dispositivos/${d.id}`)
                          }
                        >
                          Editar
                        </button>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(d.id)}
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