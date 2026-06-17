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

import Tickets from "./components/Tickets";
import TicketsFormulario from "./components/TicketsFormulario";

import Categorias from "./components/Categorias";
import CategoriaFormulario from "./components/CategoriaFormulario";

import Dispositivos from "./components/Dispositivos";
import DispositivoFormulario from "./components/DispositivoFormulario";
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
