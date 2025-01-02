<template>
  <div>
    <MoleculeModal variant="top" clickClose>
      <template #trigger>
        <label for="search">
          <AtomIcon icon="search"></AtomIcon>
        </label>
      </template>
      <v-container>
        <div class="search-top">
          <BaseInput
            id="search"
            v-model="inputValue"
            @input="onInputChange"
            prepend-icon="search"
            @click:append="clearInput"
            variant="shadow-auto"
          >
          </BaseInput>
        </div>
      </v-container>
      <AtomDivider />
      <template #list>
        <MoleculeList :items="itemsSearch">
          <template #prepend>
            <v-icon size="16" icon="mdi-magnify"></v-icon>
          </template>
        </MoleculeList>
      </template>
    </MoleculeModal>
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
.search-top {
  width: calc(100% - 40px);
  height: 72px;
  padding: 14px 0;
}
</style>
