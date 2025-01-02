<template>
  <div class="flex-column gap-6">
    <AtomTitle :title="title" :subtitle="subtitle" />

    <OrganismFilter />
    <v-data-iterator :items="productList" :items-per-page="6">
      <template v-slot:default="{ items }">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[64px] gap-x-[92px]"
        >
          <NuxtLink
            v-for="(product, index) in items"
            :key="index"
            :to="`/product/${index}`"
            class="nav-link"
          >
            <MoleculeProduct :item="product.raw" />
          </NuxtLink>
        </div>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <MoleculePagination
          v-model="pageValue"
          :page="page"
          :pageCount="pageCount"
          @prevPage="prevPage"
          @nextPage="nextPage"
        />
      </template>
    </v-data-iterator>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, onMounted, defineProps } from "vue";
import { useProductsStore } from "~/stores/products";
const products = useProductsStore();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});

const pageValue = ref<number>(1);

const productList = computed(() => {
  let list = [];
  for (let i = 1; i < 12; i++) {
    list.push({
      id: i,
      title: "Өнім атауы",
      price: "20 000 т",
      text: "Небольшое описание про товар или категория",
    });
  }
  return list;
});

watch(pageValue, (newValue) => {
  products.updateFilter("page", newValue);
});

onMounted(async () => {
  console.log("filter", products.filters);
  await products.fetch();
});
</script>

<style scoped></style>
