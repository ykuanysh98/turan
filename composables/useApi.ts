import { useNuxtApp } from 'nuxt/app';
import type { AxiosInstance } from 'axios';

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
    // Мұнда қате өңдеу логикасын қосуға болады
    console.error('API Error:', error);
    return new Error(error.message || 'Unknown error occurred');
  }

  return { get, post, put, del };
}
