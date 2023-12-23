import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manage-server-sigma.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
