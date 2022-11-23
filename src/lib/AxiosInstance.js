import axios from 'axios';

const AxiosInstance = (config) => axios({
  baseURL: process.env.REACT_APP_API_URL,
  url: config.url,
  method: config.method,
  headers: config.headers,
  params: config.params,
  data: config.data,
});

export const AxiosImageUpload = (config) => axios({
  url: config.url,
  method: 'POST',
  data: config.data,
});
export default AxiosInstance;
