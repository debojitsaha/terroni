import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const API_URL = "http://localhost:3000";
const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 3 * 60 * 1000,
});

api.interceptors.response.use(
    (res: AxiosResponse) => {
        return res;
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);

export default api;
