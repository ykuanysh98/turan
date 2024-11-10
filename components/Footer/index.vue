<template>
  <v-footer class="bg-grey-lighten-1 d-flex align-start">
    <v-col>
      <v-row>
        <img src="https://placehold.co/110x50/png" alt="logo" />
      </v-row>
      <v-row>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <p>title</p>
      </v-row>
      <v-row>
        <label>label1</label>
      </v-row>
      <v-row>
        <label>label2</label>
      </v-row>
      <v-row>
        <label>label3</label>
      </v-row>
      <v-row>
        <label>label4</label>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <p>title</p>
      </v-row>
      <v-row>
        <label>label1</label>
      </v-row>
      <v-row>
        <label>label2</label>
      </v-row>
      <v-row>
        <label>label3</label>
      </v-row>
      <v-row>
        <label>label4</label>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>