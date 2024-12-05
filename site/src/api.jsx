import axios from "axios";

const api = axios.create({
    baseURL: "",
    headers: {
        'Content-Type': 'application/json'
    }
});

// Adiciona um interceptor para incluir o token em requisições GET, PUT, e certas requisições POST
api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    console.log('Token - api.jsx:', token);
    // console.log('Token:', token);
    if (
        (token && config.method === 'get') || 
        (token && config.method === 'put') || 
        (token && config.method === 'post' && config.url.startsWith('/api/estudios')) || 
        (token && config.method === 'post' && config.url.startsWith('/api/enderecos'))
    ) {
        console.log('Entrou no if api.jsx');
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
