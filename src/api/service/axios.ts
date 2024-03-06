import a from "axios";
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

const axios = a.create({
  baseURL: import.meta.env.VITE_YARTISAN_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const axiosWithCache = setupCache(a, {
  storage: buildWebStorage(localStorage, "yartisan-cache"),
});

export default axios