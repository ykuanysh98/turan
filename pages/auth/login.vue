<template>
  <OrganismAuth onboarding>
    <AtomAuthLogin />
  </OrganismAuth>
</template>

<script lang="ts" setup>
const definePageMeta = (meta: { layout: string }) => meta;
definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped></style>
