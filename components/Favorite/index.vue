<template>
  <v-btn icon class="favorite-btn" :color="isFavorite ? 'red' : 'grey lighten-1'" @click="toggleFavorite">
    <v-icon>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      isFavorite: false, // Таңдаулы күйі
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      console.log(this.isFavorite ? "Өнім таңдаулыларға қосылды" : "Өнім таңдаулылардан жойылды");
    },
  },
};
</script>


<style scoped>
.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>