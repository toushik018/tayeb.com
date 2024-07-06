import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: 'https://tayeb-com-backend.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
