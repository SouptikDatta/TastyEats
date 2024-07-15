import axios from 'axios'

const axiosPublic =  axios.create({
    baseURL: 'https://tastyeats-server.onrender.com/',
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;
