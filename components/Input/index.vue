<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <input :id="id" :type="type" :placeholder="placeholder" v-model="inputValue"
      @input="$emit('update:modelValue', inputValue)" class="input-field" :class="{ 'error': error }"
      :style="inputStyles" />

    <!-- Error message, егер берілген болса -->
    <p v-if="error" class="input-error">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

// Проптарды анықтау
const props = defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`, // Уникалды id
  },
  inputStyles: {
    type: Object,
    default: () => ({}),
  }
})

// V-model жұмысы үшін ішкі мәнді анықтау
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-label {
  margin-bottom: 4px;
  font-weight: bold;
}

.input-field {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #007bff;
}

.input-field.error {
  border-color: red;
}

.input-error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
