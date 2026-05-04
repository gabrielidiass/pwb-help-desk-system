import api from "./api";

export const getDispositivos = async () => {
  const response = await api.get("/dispositivos");
  return response.data;
};

export const getDispositivoById = async (id) => {
  const response = await api.get(`/dispositivos/${id}`);
  return response.data;
};

export const createDispositivo = async (data) => {
  const response = await api.post("/dispositivos", data);
  return response.data;
};

export const updateDispositivo = async (id, data) => {
  const response = await api.put(`/dispositivos/${id}`, data);
  return response.data;
};

export const deleteDispositivo = async (id) => {
  const response = await api.delete(`/dispositivos/${id}`);
  return response.data;
};