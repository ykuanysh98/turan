import { defineStore } from "pinia";
import { useApi } from "~/composables/useApi";

export const useBannerStore = defineStore("banner", {
  state: () => ({
    bannerData: null as any,

    pending: false,
    error: null as string | null,
  }),
  actions: {
    async fetch(payload: any) {
      const { get } = useApi();
      const response = await get("/banners", payload);
      this.bannerData = response;

      this.pending = true;
      this.error = null;
      try {
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.pending = false;
      }
    },
  },
});
