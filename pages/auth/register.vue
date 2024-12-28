<template>
  <OrganismAuth :steper="2" />
</template>

<script lang="ts" setup>
const definePageMeta = (meta: { layout: string }) => meta;
definePageMeta({
  layout: "auth",
});
</script>
