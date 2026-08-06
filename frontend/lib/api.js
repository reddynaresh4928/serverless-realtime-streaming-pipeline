import axios from "axios";

const api = axios.create({
  baseURL: "https://gvpp7dsnoa.execute-api.ap-south-1.amazonaws.com",
});

export default api;