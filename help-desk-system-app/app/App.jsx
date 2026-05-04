import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Tickets from "./pages/Tickets";
import TicketsFormulario from "./pages/TicketsFormulario";
import CategoriasFormulario from "./pages/CategoriasFormulario";
import DispositivoFormulario from "./pages/DispositivoFormulario";
import Categorias from "./pages/Categorias";
import Dispositivos from "./pages/Dispositivos";
import cors from "cors";

//app.use(cors());

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tickets" />} />
        <Route element={<Layout />}>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/novo" element={<TicketsFormulario />} />
          <Route path="/tickets/:id" element={<TicketsFormulario />} />

          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/:id" element={<CategoriasFormulario />} /> 
          <Route path="/categorias/novo" element={<CategoriasFormulario />} />

          <Route path="/dispositivos" element={<Dispositivos />} />
          <Route path="/dispositivos/:id" element={<DispositivoFormulario />} />
          <Route path="/dispositivos/novo" element={<DispositivoFormulario />} />
        </Route>
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
