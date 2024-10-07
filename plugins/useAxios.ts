import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from "axios";

interface UseAxiosReturn{
  axiosInstance:AxiosInstance
}

const UseAxios = (): UseAxiosReturn => {
  
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      // const token = localStorage.getItem("X-TOKEN");
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  )
  return {axiosInstance}
};

export default UseAxios();
