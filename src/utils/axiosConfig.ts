import a from "axios";
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

export const axiosWithCache = setupCache(a, {
  storage: buildWebStorage(localStorage, "yartisan-cache"),
});
