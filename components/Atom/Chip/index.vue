<template>
  <v-chip @click:close="$emit('close')">
    <slot />
  </v-chip>
</template>