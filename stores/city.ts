import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';

export const useCityStore = defineStore('city', {
  state: () => ({
    cityList: null as any, // Немесе нақты типті көрсетіңіз
    pending: false,
    error: null as string | null,
  }),
  actions: {
    async fetch() {
      const { get } = useApi();
      this.pending = true;
      this.error = null;
      try {
        const response = await get('/city');
        this.cityList = response;
      } catch (error: any) {
        this.error = error.message;
        console.error('Failed to create data:', error);
      } finally {
        this.pending = false;
      }
    },
  },
});
