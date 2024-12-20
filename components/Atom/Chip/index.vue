<template>
  <v-chip class="atom-chip" @click:close="$emit('close')">
    <slot />
  </v-chip>
</template>

<style lang="scss" scoped>
.atom-chip {
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}
</style>