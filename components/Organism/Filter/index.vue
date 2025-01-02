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
      <MoleculeRange v-model="range" />
    </AtomDropdown>

    <AtomDropdown>
      <template #trigger>
        <BaseButton variant="secondary" size="xs">
          Сортировать
          <AtomIcon icon="sort"></AtomIcon>
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
import { ref, watch, computed, onMounted } from "vue";
import { useMobile } from "~/composables/useMobile";
import { useProductsStore } from "~/stores/products";
import { useCategoryStore } from "~/stores/category";

const catalogId = ref([]);
const range = ref([10, 500]);
const sortId = ref("id desc");
const { isMobile } = useMobile();
const products = useProductsStore();
const category = useCategoryStore();

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

watch([catalogId, range, sortId], ([newCatalogId, newRange, newSortId]) => {
  products.updateFilter("categories", newCatalogId);
  products.updateFilter("price_max", newRange[1]);
  products.updateFilter("price_min", newRange[0]);
  products.updateFilter("sort", newSortId);
});
</script>

<style lang="scss" scoped>
.filter__top {
  padding: 12px 16px;
}
</style>
