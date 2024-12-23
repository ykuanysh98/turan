<template>
  <div>
    <v-container class="flex-column gap-[80px] my-[96px]">
      <OrganismBanner title="Создайте мебель своей мечты"
        subtitle="Выбирайте из готовых решений в каталоге или создавайте уникальные модели для дома и офиса"
        :items="banners" variant="secondary" />
      <OrganismProductList title="Каталог" :games="products.products" />
    </v-container>
    <OrganismReservation class="py-[96px]" />
    <v-container class="pt-0">
      <OrganismSteps />
    </v-container>
    <OrganismFAQ />
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
import { useFetch } from '~/composables/useFetch'
const { data: products, fetch: fetchProducts } = useFetch();
const { data: banners, fetch: fetchBanners } = useFetch();

const InputDeviceInfo = ref([]);
onMounted(async () => {
  await fetchProducts('/api/products?page=2&limit=10');
  await fetchBanners('/api/banners');
});

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
