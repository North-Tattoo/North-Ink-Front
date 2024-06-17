import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json'
    }
});

// Adiciona um interceptor para incluir o token apenas em requisições PUT
api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token && config.method === 'put' || (token && config.method === 'post' && config.url.startsWith('/estudios')) || (token && config.method === 'post' && config.url.startsWith('/enderecos'))) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
