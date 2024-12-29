<template>
  <MoleculeButtonGroup>
    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs"> Категория </BaseButton>
      </template>

      <div v-if="isMobile">
        <div class="filter__top">
          <AtomText variant="different" size="lg"> Категории </AtomText>
        </div>
        <AtomDivider />
      </div>
      <MoleculeList v-model="catalogId" :items="categories" :checkbox="true" />
    </AtomDropdown>

    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs"> Цена </BaseButton>
      </template>

      <div v-if="isMobile">
        <div class="filter__top">
          <AtomText variant="different" size="lg"> Цена </AtomText>
        </div>
        <AtomDivider />
      </div>
      <MoleculeRange />
    </AtomDropdown>

    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Сортировать
          <v-icon icon="mdi-sort" end> </v-icon>
        </BaseButton>
      </template>

      <div v-if="isMobile">
        <div class="filter__top">
          <AtomText variant="different" size="lg"> Сортировать </AtomText>
        </div>
        <AtomDivider />
      </div>
      <MoleculeList v-model="sortId" :items="itemsCatalog" :radio="true" />
    </AtomDropdown>
  </MoleculeButtonGroup>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useCategoryStore } from "~/stores/category";
import { useMobile } from "~/composables/useMobile";
const { isMobile } = useMobile();
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
});

const itemsCatalog = [
  {
    id: 1,
    title: "qwer1",
  },
  {
    id: 2,
    title: "qwer2",
  },
  {
    id: 3,
    title: "qwer3",
  },
  {
    id: 4,
    title: "qwer4",
  },
];

onMounted(async () => {
  await category.fetch();
});
</script>

<style lang="scss" scoped>
.filter__top {
  padding: 12px 16px;
}
</style>
