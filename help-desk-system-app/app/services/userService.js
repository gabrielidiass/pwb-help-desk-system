import api from "./api";

export const getUsuarios = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUsuarioById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUsuario = async (data) => {
  const response = await api.post("/users", data);
  return response.data;
};

export const updateUsuario = async (id, data) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUsuario = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};