import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: {
    "Content-type": "application/json"
  }
});


