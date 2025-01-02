import { useNuxtApp } from "nuxt/app";
import type { AxiosInstance } from "axios";
import { navigateTo } from "#app";

export function useApi() {
  const { $axios } = useNuxtApp();
  const axios = $axios as AxiosInstance; // Типті нақтылап көрсету

  async function get<T>(url: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await axios.get<T>(url, { params });
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async function post<T>(url: string, data: Record<string, any>): Promise<T> {
    try {
      const response = await axios.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  // Қосымша әдістерді қажет болса қосуға болады
  async function put<T>(url: string, data: Record<string, any>): Promise<T> {
    try {
      const response = await axios.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  async function del<T>(url: string): Promise<T> {
    try {
      const response = await axios.delete<T>(url);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }

  function handleError(error: any): Error {
    if (isNetworkError(error)) {
      navigateTo("/error/no-connection");
    }
    if (isAuthorizationError(error)) {
      navigateTo("/error/forbidden");
    }
    return new Error(error.message || "Unknown error occurred");
  }

  return { get, post, put, del };
}

function isNetworkError(error: any) {
  if (!error || typeof error !== "object") return false;

  // const isAxiosTimeout = error.code === "ECONNABORTED";
  // const isTimeoutMessage = error.message?.includes("timeout");
  const isNetworkMessage = error.message?.includes("Network Error");

  return isNetworkMessage;
}

function isAuthorizationError(error: any) {
  const isAuthorizationNot = error.response?.status === 401;
  const isForbiddenNot = error.response?.status === 403;

  return isAuthorizationNot || isForbiddenNot;
}
