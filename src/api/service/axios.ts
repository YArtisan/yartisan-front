import a from "axios";

const axios = a.create({
 baseURL: import.meta.env.VITE_YARTISAN_API_URL,
 withCredentials: true,
});

export default axios