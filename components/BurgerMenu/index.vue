<template>
  <div>
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-navigation-drawer :model-value="drawer" location="right" width="250" v-model="drawer">
      <!-- Close button (X) in the top-right corner -->
      <template v-slot:prepend>
        <v-btn icon @click="closeDrawer" class="close-btn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script setup>

const drawer = ref(false);
const items = ref([
  { title: "Home" },
  { title: "Profile" },
  { title: "Settings" },
  { title: "Logout" },
]);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

function closeDrawer() {
  drawer.value = false;
}

function logout() {
  console.log("Logout clicked");
}
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

.v-navigation-drawer__scrim {
  position: fixed !important;
}
</style>
