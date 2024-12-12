<template>
  <AtomCard :text="text" :link="link" discount="35000" size="xs">
    <template #top>
      <v-img src="https://placehold.co/200x600" alt="Өнім атауы" height="200px" class="product-image" cover></v-img>
    </template>
    <slot />
  </AtomCard>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.product-card {
  max-width: 350px;
  position: relative;
}

.product-image {
  border-radius: 10px 10px 0 0;
}

.price {
  color: #ff5722;
}

.description {
  color: #555;
}
</style>
