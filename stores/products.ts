import { defineStore } from "pinia";
import { useApi } from "~/composables/useApi";

interface Filter {
  page: number;
  limit: number;
  search: string;
  sort: string;
  price_min: number;
  price_max: number;
  categories: any;
}
export const useProductsStore = defineStore("products", {
  state: () => ({
    items: [] as string[] | any,
    item: [] as string[] | any,
    filter: {
      page: 1,
      limit: 20,
      search: "",
      sort: "id desc",
      price_min: 0,
      price_max: 0,
      categories: [],
    } as Filter | any,

    pending: false,
    error: null as string | null,
  }),
  getters: {
    filters: (state) => state.filter,
  },
  actions: {
    async fetch() {
      const { get } = useApi();

      this.pending = true;
      this.error = null;
      try {
        const response = await get("/product", this.filters);
        this.items = response;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.pending = false;
      }
    },
    async fetchItem(params: any) {
      const { get } = useApi();

      this.pending = true;
      this.error = null;
      try {
        const response = await get(`/product/${params}`);
        this.item = response;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.pending = false;
      }
    },
    updateFilter(key: keyof Filter, value: any) {
      this.filter[key] = value;
      this.fetch();
    },
  },
});
