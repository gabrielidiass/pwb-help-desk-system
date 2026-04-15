import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block p-2 rounded ${
      pathname.startsWith(path)
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <aside className="w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Help Desk</h2>

      <nav className="space-y-2">
        <Link to="/tickets" className={linkClass("/tickets")}>
          Tickets
        </Link>

        <Link to="/categories" className={linkClass("/categories")}>
          Categorias
        </Link>

        <Link to="/users" className={linkClass("/users")}>
          Usuários
        </Link>
      </nav>
    </aside>
  );
}