import { defineStore } from "pinia";
import { useApi } from "~/composables/useApi";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    basketList: null as any,
    basketData: null as any,

    pending: false,
    error: null as string | null,
  }),
  actions: {
    async fetch() {
      const { get } = useApi();
      this.pending = true;
      this.error = null;
      try {
        const response = await get("/basket", payload);

        this.basketList = response;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.pending = false;
      }
    },
    async add(payload: Record<string, any>) {
      const { post } = useApi();
      this.pending = true;
      this.error = null;
      try {
        const response = await post("/basket", payload);

        this.basketData = response;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.pending = false;
      }
    },
  },
});
