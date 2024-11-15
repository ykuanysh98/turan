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
const definePageMeta = (meta: { layout: string }) => meta
definePageMeta({
  layout: 'default',
})

const { data: products, fetch: fetchProducts } = useFetch();
const { data: banners, fetch: fetchBanners } = useFetch();

import { onMounted } from 'vue';

onMounted(async () => {
  await fetchProducts('/api/products?page=2&limit=10');
  await fetchBanners('/api/banners');
  // throw createError({  
  //   statusCode: 404,
  //   statusMessage: 'Page Not Found',
  // });
});
</script>
