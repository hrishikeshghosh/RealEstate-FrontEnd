import axios from 'axios';  

const baseUrl = "http://16.170.255.104";

const API = axios.create({
  baseURL: baseUrl, // Read base URL from environment variable
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

export default API;
