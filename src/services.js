import axios from "axios";

const api = axios.create({
  baseURL: "http://your-backend-api-url.com",
});

export default api;
