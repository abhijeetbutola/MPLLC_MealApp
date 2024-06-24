import axios from "axios";
//import { ENV__BREATHANALYZER } from 'config/environment.develop';

// Assuming environment variables are set for these values
export const BASE_URL = "https://www.themealdb.com/api";
//export const API_KEY = ENV__BREATHANALYZER.NEXT_PUBLIC_API_KEY;
// Setup Axios Interceptors
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error?.response || error)
);

// Retrieve Access Token from Local Storage
export const getAccessToken = () => {
  return sessionStorage.getItem("idToken");
};

// Initialize and configure Axios Instance with headers
const getInstance = (customHeaders = {}) => {
  const headers = {
    "Content-Type": "application/json",
    //'x-api-key': API_KEY,
    ...customHeaders,
  };

  const accessToken = getAccessToken();
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        sessionStorage.clear(); // Clear sessionStorage if unauthorized
      }
      return Promise.reject(error?.response?.data?.error || error?.response);
    }
  );

  return instance;
};

export const Client = {
  get(endpoint, config = {}) {
    const instance = getInstance(config.headers);
    return instance.get(endpoint, { params: config.params });
  },
  post(endpoint, data, config = {}) {
    const instance = getInstance(config.headers);
    return instance.post(endpoint, data, { params: config.params });
  },
  put(endpoint, data, config = {}) {
    const instance = getInstance(config.headers);
    return instance.put(endpoint, data, { params: config.params });
  },
  delete(endpoint, config = {}) {
    const instance = getInstance(config.headers);
    return instance.delete(endpoint, { params: config.params });
  },
};
