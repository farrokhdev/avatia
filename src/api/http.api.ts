import axios, {AxiosError} from 'axios';

export const httpApi = axios.create({
    baseURL: process.env['REACT_APP_API_URL'],
});

httpApi.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers = {
        ...config.headers,
    };

    return config;
});

// httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
//     // @ts-ignore
//     throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
// });

export interface ApiErrorData {
    message: string;
}
