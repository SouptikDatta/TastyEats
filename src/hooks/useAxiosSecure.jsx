import axios from "axios";
import {useNavigate} from "react-router-dom"
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://tastyeats-server.onrender.com',
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization =`Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response ? error.response.status : null;
    
    if(status === 401 || status === 403 ){
      await logOut();
      navigate("/login")
    }
    return Promise.reject(error);
  });

  return axiosSecure
}

export default useAxiosSecure;