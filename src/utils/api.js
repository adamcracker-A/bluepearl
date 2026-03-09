import axios from 'axios';

// Create axios instance with default configuration
const api = axios.create({
    baseURL: 'https://hotel-palais.ddns.net/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle 401 Unauthorized - token expired or invalid
        if (error.response?.status === 401) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            // Optionally redirect to login
            window.dispatchEvent(new CustomEvent('auth:logout'));
        }
        return Promise.reject(error);
    }
);

export default api;