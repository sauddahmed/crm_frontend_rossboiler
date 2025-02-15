import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5185/api", // Adjust based on your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
