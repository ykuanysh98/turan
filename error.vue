<template>
  <div class="error">
    <h1>{{ error.statusCode }} - {{ error.message }}</h1>
    <p>An error occurred!</p>
    <NuxtLink to="/">
      <button>Go</button>
    </NuxtLink>
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
  background-color: #d7f8d7;
  color: #4548e6;
}
</style>
