<template>
  <div>
    <Banner :items="banners" />
    <v-container>
      <ButtonGroup />
      <ProductList :items="products.products" />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();

const definePageMeta = (meta: { layout: string }) => meta
definePageMeta({
  layout: 'default',
})
const { data: products, fetch: fetchProducts } = useFetch();
const { data: banners, fetch: fetchBanners } = useFetch();

onMounted(async () => {
  await fetchProducts('/api/products?page=2&limit=10');
  await fetchBanners('/api/banners');
});
</script>
