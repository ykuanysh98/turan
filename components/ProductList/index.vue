<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in items" :key="index" cols="12" sm="6" md="4" lg="3">
        <NuxtLink :to="`/blog/${index}`" class="nav-link">
          <Product />
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
  },
});

</script>

<style scoped></style>
