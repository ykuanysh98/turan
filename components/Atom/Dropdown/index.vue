<template>
  <slot name="trigger" />

  <v-menu activator="parent" :open-on-focus="false">
    <slot />
  </v-menu>
</template>