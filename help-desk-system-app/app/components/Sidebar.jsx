import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `nav-link rounded mb-1 ${
      pathname.startsWith(path)
        ? "active bg-primary text-white"
        : "text-dark"
    }`;

  return (
    <aside
      className="d-flex flex-column p-3 bg-dark"
      style={{ width: "240px", minHeight: "100vh" }}
    >
      <h2 className="text-white fs-5 fw-bold mb-4 px-2">Help Desk</h2>

      <nav className="nav flex-columnx">
        <Link to="/tickets" className={linkClass("/tickets")}>
        <h5 className="text-white">  Tickets</h5>
        </Link>
        <Link to="/categories" className={linkClass("/categories")}>
        <h5 className="text-white">Categorias</h5>
        </Link>
        <Link to="/users" className={linkClass("/users")}>
        <h5 className="text-white">Usuários</h5>
        </Link>
        <Link to="/tickets/novo" className={linkClass("/tickets/novo")}>
        <h5 className="text-white">Abrir um chamado</h5>
        </Link>
      </nav>
    </aside>
  );
}