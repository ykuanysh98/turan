import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';

export const useUserStore = defineStore('user', {
  state: () => ({
    data: null as any, // Немесе нақты типті көрсетіңіз
    userData: null as any, // Немесе нақты типті көрсетіңіз
    pending: false,
    error: null as string | null,
  }),
  actions: {
    async update(payload: Record<string, any>) { 
      const { post } = useApi();
      this.pending = true;
      this.error = null;
      try {
        const response = await post('/user/profile/update', payload);
        
        this.data = response; // Қажет болса, response өңдеу логикасын қосыңыз
      } catch (error: any) {
        this.error = error.message;
        console.error('Failed to create data:', error);
      } finally {
        this.pending = false;
      }
    },
    async show() { 
      const { get } = useApi();
      this.pending = true;
      this.error = null;
      try {
        const response = await get('/user/show/1');
        this.userData = response;
      } catch (error: any) {
        this.error = error.message;
        console.error('Failed to create data:', error);
      } finally {
        this.pending = false;
      }
    },
  },
});