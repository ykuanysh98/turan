import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';

export const useApiStore = defineStore('apiStore', {
  state: () => ({
    data: null as any, // Немесе нақты типті көрсетіңіз
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchData(endpoint: string, params?: Record<string, any>) {
      const { get } = useApi();
      this.loading = true;
      this.error = null;
      try {
        this.data = await get(endpoint, params);
      } catch (error: any) {
        this.error = error.message;
        console.error('Failed to fetch data:', error);
      } finally {
        this.loading = false;
      }
    },
    async createData(endpoint: string, payload: Record<string, any>) {
      const { post } = useApi();
      this.loading = true;
      this.error = null;
      try {
        const response = await post(endpoint, payload);
        this.data = response; // Қажет болса, response өңдеу логикасын қосыңыз
      } catch (error: any) {
        this.error = error.message;
        console.error('Failed to create data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
