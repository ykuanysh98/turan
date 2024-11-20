<template>
  <v-divider :class="`border-opacity-${opacity}`"></v-divider>
</template>


<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  opacity: {
    type: String,
    default: '75', // Мысалы: '100', '75', '50', '25', '0'
  },
});

</script>