<template>
  <MoleculeButtonGroup>
    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Категория
        </BaseButton>
      </template>

      <MoleculeList v-model="catalogId" :items="categories" :checkbox="true" />
    </AtomDropdown>


    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Цена
        </BaseButton>
      </template>
      <MoleculeRange />
    </AtomDropdown>


    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Сортировать
          <v-icon icon="mdi-sort" end> </v-icon>
        </BaseButton>
      </template>

      <MoleculeList v-model="sortId" :items="itemsCatalog" :radio="true" />
    </AtomDropdown>
  </MoleculeButtonGroup>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useCategoryStore } from '~/stores/category';
const category = useCategoryStore();

const catalogId = ref(null);
const sortId = ref(null);

const categories = computed(() => {
  let list: any = [];
  if (category.categoryList) {
    list = category.categoryList.data.map((e: any) => ({
      id: e.id,
      title: e.name,
    }));
  }
  return list;
})

const itemsCatalog = [
  {
    id: 1,
    name: 'qwer1'
  },
  {
    id: 2,
    name: 'qwer2'
  },
  {
    id: 3,
    name: 'qwer3'
  },
  {
    id: 4,
    name: 'qwer4'
  },
]

onMounted(async () => {
  await category.fetch();

});
</script>