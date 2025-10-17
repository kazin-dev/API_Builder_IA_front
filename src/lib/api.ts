import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// erros básicos
api.interceptors.response.use(
  (r) => r,
  (e) => {
    console.error(e);
    return Promise.reject(e);
  }
);
