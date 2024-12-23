<template>
  <div class="flex-column gap-6">
    <AtomTitle :title="title" size="sm" />
    <AtomSlider :items="[1, 2, 3, 4, 5]" />
  </div>
</template>


<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>