<template>
  <div>
    <v-app style="background-color: #FAFAFA;">
      <OrganismHeader />
      <NuxtPage />
      <OrganismFooter v-if="$route.path === '/'" />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>