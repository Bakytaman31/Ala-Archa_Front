import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://alaarcha.inai.kg/",
});

export default axiosAPI;