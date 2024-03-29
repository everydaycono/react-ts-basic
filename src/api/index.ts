import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const apiClient = axios.create({
  baseURL,
});

export default apiClient;
