<template>
  <div>
    <h1>Деректер</h1>
    <button @click="fetchData">Деректерді алу</button>
    <pre>{{ data }}</pre>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup lang="ts">
const definePageMeta = (meta: { layout: string }) => meta

definePageMeta({
  layout: 'default', // 'default' макетін қолдану
})

import { useUser } from '../composables/useUser';

const { data, fetchData } = useUser('https://jsonplaceholder.typicode.com/todos/1');



import { ref } from 'vue';
const greeting = ref('');

async function fetchGreeting() {
  const response = await $fetch('/api/greet', { params: { name: 'Али' } });
  // greeting.value = response.message;
}

fetchGreeting();
</script>
