import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://localhost:4000',
});

export default axiosInstance;
