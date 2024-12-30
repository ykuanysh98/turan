<template>
  <div class="py-10">
    <v-container>
      <OrganismProductList title="Шкафы" subtitle="По запросу Шкафы найдено 268 товаров" :games="products.products" />
    </v-container>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';

import { useFetch } from '~/composables/useFetch'
const { data: products, fetch: fetchProducts } = useFetch();

onMounted(async () => {
  await fetchProducts('/api/products?page=2&limit=10');
});

</script>