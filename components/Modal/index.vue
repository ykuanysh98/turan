<template>
  <button @click="open">Open Modal</button>
  <div v-if="isOpen" class="modal">
    <p>Modal Content</p>
    <button @click="close">Close</button>
  </div>
</template>

<script setup lang="ts">
const { isOpen, open, close } = useModal();
</script>