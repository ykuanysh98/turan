<template>
  <div class="flex-column gap-6">
    <AtomTitle title="Каталог" />

    <MoleculeButtonGroup>
      <BaseButton variant="secondary" size="xs">
        Категория
      </BaseButton>
      <BaseButton variant="secondary" size="xs">
        Цена
      </BaseButton>
      <BaseButton variant="secondary" size="xs">
        Сортировать
        <v-icon icon="mdi-sort" end> </v-icon>
      </BaseButton>
    </MoleculeButtonGroup>

    <v-data-iterator :items="games" :items-per-page="6">
      <template v-slot:default="{ items }">
        <div class="grid grid-cols-3 gap-y-[64px]  gap-x-[92px]">
          <NuxtLink v-for="(product, index) in items" :key="index" :to="`/blog/${index}`" class="nav-link">
            <MoleculeProduct text="Қысқаша сипаттамасы" link="10,000 ₸">
              <AtomTitle title="Өнім атауы" size="xs" />
            </MoleculeProduct>
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
});

</script>

<style scoped></style>
