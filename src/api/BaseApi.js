import axios from 'axios';  

const baseUrl = "https://api.leroserealestate.ae";

const API = axios.create({
  baseURL: baseUrl, // Read base URL from environment variable
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

export default API;
