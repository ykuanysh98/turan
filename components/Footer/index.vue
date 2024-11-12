<template>
  <v-footer class="bg-grey-lighten-1 py-12 px-0 flex-start">
    <v-container>
      <div class="footer flex-start">
        <v-col class="flex-column">
          <v-row>
            <img src="https://placehold.co/110x50/png" alt="logo" />
          </v-row>
          <v-row>
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-row>
        </v-col>

        <v-col>
          <v-row class="mb-2">
            <p>Тема 1</p>
          </v-row>
          <v-row v-for="(item, index) in items" :key="index">
            <label>{{ item }}</label>
          </v-row>
        </v-col>

        <v-col>
          <v-row class="mb-2">
            <p>Тема 2</p>
          </v-row>
          <v-row v-for="(item, index) in items" :key="index">
            <label>{{ item }}</label>
          </v-row>
        </v-col>

        <v-col>
          <v-row class="mb-2">
            <p>Социялный сеть</p>
          </v-row>
          <v-row class="flex gap-2">
            <v-btn v-for="icon in icons" :key="icon" :icon="icon"></v-btn>
          </v-row>
        </v-col>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      'Home',
      'About Us',
      'Team',
      'Services',
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>
@media (max-width: 992px) {
  .footer {
    flex-wrap: wrap;
    grid-gap: 24px;
  }

  .footer .v-col {
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>