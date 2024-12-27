<template>
  <div class="search-input">
    <AtomDropdown ref="menu" block>
      <template #trigger>
        <BaseInput class="mobile-not" v-model="inputValue" @input="onInputChange" :placeholder="placeholder"
          prepend-icon="mdi-magnify" @click:append="clearInput" size="xs">

        </BaseInput>
        <v-icon class="mobile" icon="mdi-magnify"></v-icon>
      </template>

      <MoleculeList :items="itemsSearch">
        <template #prepend>
          <v-icon size="16" icon="mdi-magnify"></v-icon>
        </template>
      </MoleculeList>
    </AtomDropdown>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeUnmount, defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Пойск'
    }
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const inputValue = ref<string>(props.modelValue);
    const pending = ref<boolean>(false);
    const itemsSearch = ref<string[]>([]);
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const menu = ref(null); // v-menu сілтемесі

    const onInputChange = () => {
      if (menu.value) {
        console.log('menu', menu.value);
        // menu.value.isActive = true; 
      }
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(async () => {
        emit('update:modelValue', inputValue.value);
        await fetchResults(inputValue.value);
      }, 400);
    };

    const clearInput = () => {
      inputValue.value = "";
      onInputChange();
    };

    const fetchResults = async (query: string) => {
      if (query.trim() === '') {
        itemsSearch.value = [];
        return;
      }
      pending.value = true;
      try {
        const results = await $fetch<string[]>('/api/search', { query: { q: query } });
        itemsSearch.value = results;
      } catch (error) {
        console.error('API сұранысы сәтсіз аяқталды:', error);
      } finally {
        pending.value = false;
      }
    };

    onBeforeUnmount(() => {
      if (timeout) clearTimeout(timeout);
    });

    return {
      inputValue,
      itemsSearch,
      pending,
      onInputChange,
      clearInput,
    };
  }
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
