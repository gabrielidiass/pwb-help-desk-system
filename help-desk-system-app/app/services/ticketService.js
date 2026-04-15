import api from "./api";

// Listar todos
export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

// Buscar por ID
export const getTicketById = async (id) => {
  const response = await api.get(`/tickets/${id}`);
  return response.data;
};

// Criar
export const createTicket = async (data) => {
  const response = await api.post("/tickets", data);
  return response.data;
};

// Atualizar
export const updateTicket = async (id, data) => {
  const response = await api.put(`/tickets/${id}`, data);
  return response.data;
};

// Deletar
export const deleteTicket = async (id) => {
  const response = await api.delete(`/tickets/${id}`);
  return response.data;
};