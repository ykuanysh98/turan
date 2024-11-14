<template>
  <v-card class="product-card" elevation="4">
    <!-- Product Image -->
    <v-img src="https://placehold.co/200x600" alt="Өнім атауы" height="200px" class="product-image" cover></v-img>
    <!-- Favorite Button (Top Right) -->
    <Favorite />

    <!-- Product Info -->
    <v-card-title class="headline">Өнім атауы</v-card-title>
    <v-card-subtitle class="mb-3">Қысқаша сипаттамасы</v-card-subtitle>

    <v-card-text>
      <div class="price text-h5 font-weight-bold">10,000 ₸</div>
    </v-card-text>

    <!-- Actions -->
    <v-card-actions v-if="$slots.default">
      <slot />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    addToCart() {
      console.log("Өнім себетке қосылды");
    },
    buyNow() {
      console.log("Өнім сатып алынды");
    },
  },
};
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
