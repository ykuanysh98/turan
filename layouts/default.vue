<template>
  <div>
    <v-app class="main-app">
      <OrganismHeader />
      <NuxtPage />
      <OrganismFooter v-if="$route.path === '/'" />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "default",
};
</script>

<style lang="scss" scoped>
.main-app {
  // padding-top: 80px;
  // overflow: visible;
  background-color: #fafafa;
  @media (max-width: 768px) {
    // padding-top: 72px;
  }
}
</style>
