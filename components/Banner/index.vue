<template>
  <v-carousel cycle interval="4000" height="600" hide-delimiter-background touch :show-arrows="false">
    <v-carousel-item v-for="(item, index) in items" :key="index" :src="item.img" cover>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface Item {
  id: string;
  img: string;
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => []
    },
  },
});
</script>