<template>
  <slot />
  <v-list-item :title="title" :subtitle="subtitle" :prepend-avatar="avatar">
  </v-list-item>
  <AtomDivider v-if="line" />
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
  avatar: {
    type: String,
    default: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  line: {
    type: Boolean,
    default: false,
  },
});

// Динамикалық класс есептеу
const computedClass = computed(() => {
  let classList = ['btn']
  classList.push(`btn--${props.variant}`)
  return classList
});
</script>