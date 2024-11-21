<template>
  <div class="search-input">
    <AtomDropdown ref="menu">
      <template #trigger>
        <BaseInput v-model="inputValue" append-icon="mdi-close" @input="onInputChange" :label="placeholder"
          prepend-icon="mdi-magnify" @click:append="clearInput" />
      </template>
      <v-list>
        <v-list-item v-for="item in itemsSearch" :key="item" link>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="itemsSearch.length === 0">
          <v-list-item-title>Ничего не найдено</v-list-item-title>
        </v-list-item>
      </v-list>
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

<style scoped>
.search-input {
  min-width: 200px;
}
</style>
