import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use(
  config => {
    console.log('send request');
    return config;
  },
  error => {
    console.log('send request error');
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    if (error?.response?.data) {
      return Promise.reject(new Error(error?.response?.data));
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
