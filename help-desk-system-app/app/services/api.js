import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5137/api", // 🔥 ajuste para sua API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;