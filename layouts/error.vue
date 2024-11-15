<template>
  <div class="error">
    <h1>{{ error.statusCode }} - {{ error.message }}</h1>
    <p>An error occurred!</p>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>

<style scoped>
.error {
  text-align: center;
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
}
</style>
