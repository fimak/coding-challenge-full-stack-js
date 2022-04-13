import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const port = parseInt(process.env.PORT || '3001', 10);

const config: AxiosRequestConfig = {
  baseURL: `http://localhost:${port}`,
};
const client: AxiosInstance = axios.create(config);

export default client;
