import { defineStore } from 'pinia';

type Items = {
  id: number,
  name: string
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    items:  [] as Items[],
  }),
  getters: {
    isLoggait: (state) => state.items,
  },
  actions: {
    increment() {
      this.items.push({id: 1, name: "New"});
    }
  }
})
