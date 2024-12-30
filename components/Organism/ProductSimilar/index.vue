<template>
  <div class="flex-column gap-6">
    <AtomTitle :title="title" size="sm" />
    <AtomSlider :items="bannerList" :count="3.5" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});

const bannerList = computed(() => {
  let list = [];
  list.push(
    {
      id: 1,
      title: "Өнім атауы",
    },
    {
      id: 2,
      title: "Өнім атауы",
    },
    {
      id: 3,
      title: "Өнім атауы",
    },
    {
      id: 4,
      title: "Өнім атауы",
    }
  );
  return list;
});
</script>
