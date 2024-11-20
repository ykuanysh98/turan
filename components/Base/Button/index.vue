<template>
  <v-btn :class="computedClass">
    <slot />
  </v-btn>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // Мысалы: 'primary', 'secondary', 'danger', 'success'
  },
});

// Динамикалық класс есептеу
const computedClass = computed(() => {
  let classList = ['btn']
  classList.push(`btn--${props.variant}`)
  return classList
});
</script>

<style lang="scss" scoped>
.btn {
  &--primary {
    background-color: #1976d2;
    color: white;

    &:hover {
      background-color: #1565c0;
    }
  }

  &--secondary {
    background-color: #424242;
    color: white;

    &:hover {
      background-color: #333333;
    }
  }

  &--success {
    background-color: #2e7d32;
    color: white;

    &:hover {
      background-color: #1b5e20;
    }
  }

  &--danger {
    background-color: #d32f2f;
    color: white;

    &:hover {
      background-color: #c62828;
    }
  }
}
</style>
