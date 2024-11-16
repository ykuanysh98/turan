import { defineStore } from 'pinia';

export const useAuthStore = defineStore('login', {
  state: () => ({
    isLoggait: false,
  }),
  getters: {
    isLoggait: (state) => state.isLoggait,
  },
  actions: {
    increment() {
      this.isLoggait = true;
    }
  }
})
