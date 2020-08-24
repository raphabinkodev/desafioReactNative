import axios from "axios";

const api = axios.create({
  baseURL: "http://172.19.233.91:3333",
});

export default api;
