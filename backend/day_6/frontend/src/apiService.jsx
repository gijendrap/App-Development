// apiService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend API URL


const apiService = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Adjust this timeout as needed
});

export default apiService;
