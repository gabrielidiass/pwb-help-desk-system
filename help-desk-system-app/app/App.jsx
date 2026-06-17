import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/cjs/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";

import Tickets from "./pages/Tickets.jsx";
import TicketsFormulario from "./pages/TicketsFormulario.jsx";

import Categorias from "./pages/Categorias";
import CategoriaFormulario from "./pages/CategoriaFormulario.jsx";

import Dispositivos from "./pages/Dispositivos.jsx";
import DispositivoFormulario from "./pages/DispositivoFormulario.jsx";
import MenuPrivado from "./pages/MenuPrivado";

const router = createBrowserRouter([
  // Rotas públicas
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to="/tickets" />,
          },
          {
            path: "tickets",
            element: <Tickets />,
          },
          {
            path: "categorias",
            element: <Categorias />,
          },
          {
            path: "dispositivos",
            element: <Dispositivos />,
          },
        ],
      },
    ],
  },

  // Rotas privadas
  {
    path: "/",
    element: <MenuPrivado />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "tickets/novo",
            element: <TicketsFormulario />,
          },
          {
            path: "tickets/:id",
            element: <TicketsFormulario />,
          },

          {
            path: "categorias/novo",
            element: <CategoriaFormulario />,
          },
          {
            path: "categorias/:id",
            element: <CategoriaFormulario />,
          },

          {
            path: "dispositivos/novo",
            element: <DispositivoFormulario />,
          },
          {
            path: "dispositivos/:id",
            element: <DispositivoFormulario />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <h1>404 - Página não encontrada</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
