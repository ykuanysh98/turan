<template>
  <div>
    <v-btn @click="getUser">Click</v-btn>
    <p>{{ userData }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userData = ref<string[]>([]);

const getUser = () => {
  userData.value.push(1);
}

</script>