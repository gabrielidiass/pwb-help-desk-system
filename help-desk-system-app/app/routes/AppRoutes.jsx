import { BrowserRouter, Routes, Route } from "react-router-dom";

import TicketsList from "../pages/TicketsList";
import TicketForm from "../pages/TicketForm";
import TicketDetail from "../pages/TicketDetail";
import Categories from "../pages/Categories";
import Users from "../pages/Users";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tickets" element={<TicketsList />} />
        <Route path="/tickets/novo" element={<TicketForm />} />
        <Route path="/tickets/:id" element={<TicketDetail />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}