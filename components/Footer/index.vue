<template>
  <footer>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <p>© 2024 Менің Сайтым. Барлық құқықтар қорғалған.</p>
          <v-btn icon href="https://facebook.com" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://instagram.com" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
// Қажетті props немесе басқа логикаларды осы жерде анықтауға болады
</script>

<style scoped>
footer {
  background-color: #424242;
  color: white;
  padding: 20px 0;
}
</style>
