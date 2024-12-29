import axios from "axios";
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";

import { useAuth } from "~/composables/useAuth";
const { getToken } = useAuth();

export default defineNuxtPlugin(() => {
  const config: any = useRuntimeConfig();
  console.log("axios", config.public.apiBase);

  const axiosInstance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 5000,
  });

  axiosInstance.interceptors.request.use((config) => {
    // Мұнда қажет болса токен қосуға болады
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
