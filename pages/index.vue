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
import { ref, onMounted } from 'vue';
import { useCounterStore } from '../stores/counter';
import { useProductsStore } from '../stores/products';

const counterStore = useCounterStore();
const productsStore = useProductsStore();

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

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
