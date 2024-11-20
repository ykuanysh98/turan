<template>
  <div @click="open">
    <slot name="trigger" />
  </div>
  <v-dialog v-model="isOpen" max-width="500">
    <slot />
    <v-btn class="close" icon="mdi-close" variant="text" @click="close"></v-btn>
  </v-dialog>
</template>


<script setup lang="ts">
import { useModal } from '~/composables/useModal'
const { isOpen, open, close } = useModal();
</script>

<style scoped>
.close {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>