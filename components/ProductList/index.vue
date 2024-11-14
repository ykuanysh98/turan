<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4" lg="3">
        <NuxtLink :to="`/blog/${index}`" class="nav-link">
          <Product />
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { name: 'Продукт 1', price: '1000₸' },
  { name: 'Продукт 2', price: '1500₸' },
  { name: 'Продукт 3', price: '2000₸' },
  { name: 'Продукт 4', price: '2500₸' },
  { name: 'Продукт 3', price: '2000₸' },
  { name: 'Продукт 4', price: '2500₸' }
])

function addToCart(product) {
  console.log(`${product.name} себетке қосылды`)
}
</script>

<style scoped>
.v-card {
  height: 100%;
}
</style>
