import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend-api-url.com",
});

export default api;
