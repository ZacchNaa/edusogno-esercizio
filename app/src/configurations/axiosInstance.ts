import axios, { AxiosResponse } from 'axios';
import ApiConstants from './apiConstants';

const axiosInstance = axios.create({
  baseURL: ApiConstants.BASE_URL,
});

const newAxios = ({ ...options }) => {
  const token = localStorage.getItem('token');
  if (token) axiosInstance.defaults.headers.common['Authorization'] = token;

  const onSuccess = (response: AxiosResponse) => response;

  const onError = (error: any) => Promise.reject(error);

  return axiosInstance(options).then(onSuccess).catch(onError);

};

export default newAxios;
