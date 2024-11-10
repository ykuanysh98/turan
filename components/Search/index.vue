<template>
  <div class="search-input">
    <Dropdown :items="itemsSearch" empty-text="Ничего не найдено" :pending="pending" auto-open>
      <v-icon>mdi-magnify</v-icon>
      <input type="text" v-model="inputValue" class="input-field" @input="onInputChange" :placeholder="placeholder" />
      <v-icon v-if="inputValue !== ''" @click="inputValue = ''; onInputChange()">mdi-close</v-icon>
    </Dropdown>
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

    const onInputChange = () => {
      if (timeout) clearTimeout(timeout);
      console.log(1);

      timeout = setTimeout(async () => {
        emit('update:modelValue', inputValue.value);
        await fetchResults(inputValue.value);
      }, 400);
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
    };
  }
});
</script>

<style scoped>
.search-input {
  /* display: flex;
  align-items: center; */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  /* position: relative; */
  min-width: 200px;
}

.search-icon {
  color: #666;
  margin-right: 8px;
}

.input-field {
  width: 100%;
  border: none;
  outline: none;
  display: block;
  /* padding: 8px; */
}
</style>
