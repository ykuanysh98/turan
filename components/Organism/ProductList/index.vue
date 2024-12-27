<template>
  <div class="flex-column gap-6">
    <AtomTitle :title="title" :subtitle="subtitle" />

    <OrganismFilter />
    <v-data-iterator :items="productList" :items-per-page="6">
      <template v-slot:default="{ items }">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[64px]  gap-x-[92px]">
          <NuxtLink v-for="(product, index) in items" :key="index" :to="`/product/${index}`" class="nav-link">
            <MoleculeProduct :item="product.raw" />
          </NuxtLink>
        </div>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <MoleculePagination :page="page" :pageCount="pageCount" @prevPage="prevPage" @nextPage="nextPage" />
      </template>
    </v-data-iterator>

  </div>
</template>

<script lang="ts" setup>
interface Filter {
  page: number,
  limit: number,
  search: string,
  sort: string,
  price_min: number,
  price_max: number,
  categories: any,
}

import { reactive, computed, onMounted, defineProps } from 'vue'
import { useProductsStore } from '~/stores/products';
const products = useProductsStore();

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
});

const productList = computed(() => {
  let list = [];
  for (let i = 1; i < 12; i++) {
    list.push(
      {
        id: i,
        title: 'Өнім атауы',
        price: '20 000 т',
        text: 'Небольшое описание про товар или категория',
      }
    )
  }
  return list
});

const filter = reactive<Filter>({
  page: 1,
  limit: 20,
  search: "",
  sort: "id desc",
  price_min: 0,
  price_max: 0,
  categories: [],
});

onMounted(async () => {
  console.log('filter', filter);
  await products.fetch(filter);

  // console.log('products', `${products.items}`);
});
</script>

<style scoped></style>
