<template>
  <div class="search-input">
    <AtomDropdown ref="menu" closeClick block>
      <template #trigger>
        <BaseInput
          v-model="inputValue"
          prepend-icon="search"
          :placeholder="placeholder"
          variant="shadow"
          @input="onInputChange"
          @click:append="clearInput"
        >
        </BaseInput>
      </template>

      <MoleculeList :items="searchList">
        <template #prepend>
          <AtomIcon icon="search" variant="dark" size="xs" />
        </template>
      </MoleculeList>
    </AtomDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onBeforeUnmount, defineProps } from "vue";
import { useProductsStore } from "~/stores/products";
const products = useProductsStore();

const props = defineProps({
  placeholder: {
    type: String,
    default: "Пойск",
  },
});

const inputValue = ref<string>("");
const itemsSearch = ref<string[]>([]);
let timeout: ReturnType<typeof setTimeout> | null = null;

const searchList = computed(() => {
  let list = itemsSearch.value;
  if (products.items) {
    list = products.items;
  }
  return list;
});

const onInputChange = () => {
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(async () => {
    await fetchResults(inputValue.value);
    products.updateFilter("search", inputValue.value);
  }, 400);
};

const fetchResults = async (query: string) => {
  if (query.trim() === "") {
    itemsSearch.value = [];
    return;
  }
  try {
    const results = await $fetch<string[]>("/api/search", {
      query: { q: query },
    });
    itemsSearch.value = results;
  } catch (error) {
    console.error("Пойск сұранысы сәтсіз аяқталды:", error);
  }
};

const clearInput = () => {
  inputValue.value = "";
  onInputChange();
};

onBeforeUnmount(() => {
  if (timeout) clearTimeout(timeout);
});
</script>

<style lang="scss" scoped>
.search-input {
  min-width: 200px;

  &:deep(.v-overlay__content) {
    top: 73px;
  }
}
</style>
