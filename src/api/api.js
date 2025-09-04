import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_API_BASE_URL_LOCAL;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const csrfToken = Cookies.get("csrftoken");
    if (csrfToken && ["post", "put", "patch", "delete"].includes(config.method)) {
        config.headers["X-CSRFToken"] = csrfToken;
    }
    return config;
});

export default api;
