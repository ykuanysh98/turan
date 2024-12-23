<template>
  <div class="flex-column gap-6">
    <AtomTitle :title="title" :subtitle="subtitle" />

    <OrganismFilter />

    <v-data-iterator :items="games" :items-per-page="6">
      <template v-slot:default="{ items }">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[64px]  gap-x-[92px]">
          <NuxtLink v-for="(product, index) in items" :key="index" :to="`/product/${index}`" class="nav-link">
            <MoleculeProduct />
          </NuxtLink>
        </div>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <MoleculePagination :page="page" :pageCount="pageCount" @prevPage="prevPage" @nextPage="nextPage" />
      </template>
    </v-data-iterator>

  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  games: {
    type: Array,
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
});

</script>

<style scoped></style>
