<template>
  <v-text-field :class="computedClass"></v-text-field>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // Мысалы: 'primary', 'secondary', 'danger', 'success'
  },
});

const computedClass = computed(() => {
  let classList = ['input']
  classList.push(`input--${props.variant}`)
  return classList
});
</script>

<style scoped lang="scss">
.input {
  &:deep(.v-input__details) {
    display: none;
  }

  &:deep(.v-field__outline) {
    display: none;
  }

  &:deep(.v-field__input) {
    padding: 0;
  }

  &:deep(.v-field-label--floating) {
    opacity: 0;
  }

  &--primary {
    border: 1px solid #d4d4d4;
    // background-color: aquamarine;
    padding: 0 12px;
  }

}
</style>
