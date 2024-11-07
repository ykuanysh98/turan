<template>
  <div class="search-input">
    <span class="search-icon">
      <v-icon>mdi-magnify</v-icon>
    </span>

    <input type="text" v-model="inputValue" class="input-field" @input="onInputChange" :placeholder="placeholder" />

    <Dropdown :options="dropdownOptions" @update:selected="handleSelect">
      <template #trigger>
        <button>
          Choose your option
        </button>
      </template>
    </Dropdown>

    <div v-if="selectedOption" class="mt-4">
      <p>Selected option: {{ selectedOption }}</p>
    </div>
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
      default: ''
    }
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const inputValue = ref<string>(props.modelValue);
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const dropdownOptions = ref<string[]>([]);
    const selectedOption = ref<string | null>(null);

    const onInputChange = () => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(async () => {
        emit('update:modelValue', inputValue.value);
        await fetchResults(inputValue.value);
      }, 400);
    };

    const handleSelect = (option: string) => {
      selectedOption.value = option;
    };

    const fetchResults = async (query: string) => {
      if (query.trim() === '') {
        dropdownOptions.value = [];
        return;
      }
      try {
        const results = await $fetch<string[]>('/api/search', { query: { q: query } });
        dropdownOptions.value = results;
      } catch (error) {
        console.error('API сұранысы сәтсіз аяқталды:', error);
      }
    };

    onBeforeUnmount(() => {
      if (timeout) clearTimeout(timeout);
    });

    return {
      inputValue,
      dropdownOptions,
      selectedOption,
      onInputChange,
      handleSelect
    };
  }
});
</script>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  position: relative;
}

.search-icon {
  color: #666;
  margin-right: 8px;
}

.input-field {
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
}
</style>
