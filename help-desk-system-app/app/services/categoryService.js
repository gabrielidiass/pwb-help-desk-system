import api from "./api";

export const getCategorias = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getCategoriaById = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data;
};

export const createCategoria = async (data) => {
  const response = await api.post("/categories", data);
  return response.data;
};

export const updateCategoria = async (id, data) => {
  const response = await api.put(`/categories/${id}`, data);
  return response.data;
};

export const deleteCategoria = async (id) => {
  const response = await api.delete(`/categories/${id}`);
  return response.data;
};