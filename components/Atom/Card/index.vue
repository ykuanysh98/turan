<template>
  <v-card :class="computedClass">

    <slot name="top"></slot>

    <v-card-item v-if="title || subtitle">
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-subtitle>
        {{ subtitle }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <slot></slot>
    </v-card-text>

    <AtomDivider v-if="$slots.bottom"></AtomDivider>

    <v-card-actions v-if="$slots.bottom">
      <slot name="bottom"></slot>
    </v-card-actions>
  </v-card>
</template>


<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // Мысалы: 'primary', 'secondary', 'danger', 'success'
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
});

// Динамикалық класс есептеу
const computedClass = computed(() => {
  let classList = ['card']
  classList.push(`card--${props.variant}`)
  return classList
});
</script>


<style lang="scss" scoped>
.btn {
  &--primary {}

  &--secondary {}
}
</style>